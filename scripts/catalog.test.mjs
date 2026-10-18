import { spawnSync } from 'node:child_process'
import { generateKeyPairSync } from 'node:crypto'
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs'
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
