import { spawnSync } from 'node:child_process'
import { generateKeyPairSync } from 'node:crypto'
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { resolve, join } from 'node:path'
import { test } from 'node:test'
import assert from 'node:assert/strict'

const platform = resolve(process.env.CATALOG_PLATFORM_ROOT ?? '../platform')
const script = resolve('scripts/catalog.mjs')
const pair = () => generateKeyPairSync('ed25519', { publicKeyEncoding: { type: 'spki', format: 'pem' }, privateKeyEncoding: { type: 'pkcs8', format: 'pem' } })
function fixture(run) {
  const root = mkdtempSync(join(tmpdir(), 'catalog-sign-test-'))
  const key = pair()
  writeFileSync(join(root, 'trusted-key.json'), JSON.stringify({ keyId: 'test-only', publicKey: key.publicKey }))
  writeFileSync(join(root, 'historical-keys.json'), JSON.stringify([{ keyId: 'test-only', publicKey: key.publicKey }]))
  const unsigned = { format: 1, publishedAt: '2026-10-18T00:00:00Z', entries: [{ id: 'tool', version: '1.0.0', contentHash: 'a'.repeat(64) }] }
  writeFileSync(join(root, 'unsigned.json'), JSON.stringify(unsigned))
  const execute = (mode, input, output, privateKey = key.privateKey) => spawnSync(process.execPath, ['--import', join(platform, 'node_modules/tsx/dist/loader.mjs'), script, mode, platform, input, ...output ? [output] : []],
    { cwd: root, env: { ...process.env, CATALOG_ED25519_PRIVATE_KEY: privateKey }, encoding: 'utf8' })
  try { run({ root, execute, unsigned }) } finally { rmSync(root, { recursive: true, force: true }) }
}

test('signs canonical bytes, verifies them, and rejects changed published bytes', () => fixture(({ root, execute, unsigned }) => {
  const result = execute('sign', 'unsigned.json', 'signed.json')
  assert.equal(result.status, 0, result.stderr)
  assert.equal(execute('verify', 'signed.json').status, 0)
  writeFileSync(join(root, 'signed.json'), JSON.stringify({ ...unsigned, publishedAt: '2026-10-19T00:00:00Z', signature: { keyId: 'test-only', signature: 'a'.repeat(88) } }))
  assert.equal(execute('verify', 'signed.json').status, 1)
}))

test('refuses a signing secret that differs from the committed public key', () => fixture(({ execute }) => {
  const result = execute('sign', 'unsigned.json', 'signed.json', pair().privateKey)
  assert.equal(result.status, 1)
  assert.match(result.stderr, /does not match/)
}))

test('refuses content drift for an already released id and version', () => fixture(({ root, execute, unsigned }) => {
  assert.equal(execute('sign', 'unsigned.json', 'signed.json').status, 0)
  const entry = unsigned.entries[0]
  writeFileSync(join(root, 'next.json'), JSON.stringify({ ...unsigned, entries: [{ ...entry, contentHash: 'b'.repeat(64) }] }))
  const result = execute('immutable', 'signed.json', 'next.json')
  assert.equal(result.status, 1)
  assert.match(result.stderr, /Immutable entry changed/)
  writeFileSync(join(root, 'next.json'), JSON.stringify({ ...unsigned, entries: [{ ...entry, version: '1.0.1', contentHash: 'b'.repeat(64) }] }))
  assert.equal(execute('immutable', 'signed.json', 'next.json').status, 0)
}))

test('keeps old versions immutable after a newer version replaces them in the latest catalog', () => fixture(({ root, execute, unsigned }) => {
  mkdirSync(join(root, 'history'))
  assert.equal(execute('sign', 'unsigned.json', 'history/first.json').status, 0)
  writeFileSync(join(root, 'second.json'), JSON.stringify({ ...unsigned, entries: [{ ...unsigned.entries[0], version: '1.1.0', contentHash: 'b'.repeat(64) }] }))
  assert.equal(execute('sign', 'second.json', 'history/second.json').status, 0)
  writeFileSync(join(root, 'third.json'), JSON.stringify({ ...unsigned, entries: [{ ...unsigned.entries[0], contentHash: 'c'.repeat(64) }] }))
  const result = execute('immutable', 'history', 'third.json')
  assert.equal(result.status, 1)
  assert.match(result.stderr, /Immutable entry changed: tool@1.0.0/)
}))

test('verifies archived signatures after the old key is retired from current trust', () => fixture(({ root, execute, unsigned }) => {
  assert.equal(execute('sign', 'unsigned.json', 'old-signed.json').status, 0)
  const nextKey = pair()
  writeFileSync(join(root, 'trusted-key.json'), JSON.stringify({ keyId: 'next-only', publicKey: nextKey.publicKey }))
  writeFileSync(join(root, 'next.json'), JSON.stringify({ ...unsigned, entries: [{ ...unsigned.entries[0], version: '1.1.0' }] }))
  assert.equal(execute('sign', 'next.json', 'new-signed.json', nextKey.privateKey).status, 0)
  assert.equal(execute('verify', 'old-signed.json').status, 1)
  assert.equal(execute('verify', 'new-signed.json').status, 0)
  const result = execute('immutable', 'old-signed.json', 'next.json')
  assert.equal(result.status, 0, result.stderr)
}))


test('assembles plugin entries alongside suites and dependencies', () => fixture(({ root, execute }) => {
  for (const kind of ['suite', 'dependency', 'plugin']) {
    mkdirSync(join(root, 'entries', kind), { recursive: true })
    writeFileSync(join(root, 'entries', kind, `${kind}-fixture.json`), JSON.stringify({ kind, id: `${kind}-fixture`, version: '1.0.0', engines: { platform: '>=0.1.24' }, adapters: [], title: { en: 'Fixture', 'zh-CN': '测试' }, description: { en: 'Fixture', 'zh-CN': '测试' }, source: { en: 'Fixture', 'zh-CN': '测试' }, identity: { en: 'Fixture', 'zh-CN': '测试' }, dependencies: [], items: [{ kind: 'plugin', packageName: '@fixture/editor', version: '1.0.0', integrity: 'sha512-' + Buffer.alloc(64, 1).toString('base64'), runtimeDependencies: [], catalogDependencies: [], access: { environment: [], entriesYaml: '' } }] }))
  }
  const result = execute('assemble', 'assembled.json')
  assert.equal(result.status, 0, result.stderr)
  const document = JSON.parse(readFileSync(join(root, 'assembled.json'), 'utf8'))
  assert.deepEqual(document.entries.map(entry => entry.kind), ['suite', 'dependency', 'plugin'])
}))
