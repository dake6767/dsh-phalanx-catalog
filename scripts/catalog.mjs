import { createPrivateKey, createPublicKey, sign, verify } from 'node:crypto'
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const [mode, platformRoot, input, output] = process.argv.slice(2)
if (!platformRoot || !input || !['assemble', 'sign', 'verify', 'immutable'].includes(mode)) throw new Error('Usage: catalog.mjs {assemble|sign|verify|immutable} <platform-root> <input-or-output> [output]')
const { suiteCatalogSignedPayload, withSuiteCatalogContentHash } = await import(pathToFileURL(resolve(platformRoot, 'src/domain/suite-catalog-document.ts')).href)
const readJson = async path => JSON.parse(await readFile(path, 'utf8'))
if (mode === 'assemble') {
  const entries = []
  for (const kind of ['suite', 'dependency']) {
    for (const name of (await readdir(`entries/${kind}`)).filter(name => name.endsWith('.json')).sort()) {
      const entry = await readJson(`entries/${kind}/${name}`)
      if (entry.kind !== kind || `${entry.id}.json` !== name) throw new Error(`Entry path does not match kind/id: ${kind}/${name}`)
      entries.push(withSuiteCatalogContentHash(entry))
    }
  }
  const document = { format: 1, publishedAt: new Date().toISOString(), entries }
  await writeFile(input, `${JSON.stringify(document, null, 2)}\n`)
} else {
  const document = await readJson(input)
  const trusted = await readJson('trusted-key.json')
  if (mode === 'immutable') {
    if (!output) throw new Error('Immutability check requires the next document')
    const { officialSuiteCatalogKeys } = await import(pathToFileURL(resolve(platformRoot, 'src/domain/suite-catalog-keys.ts')).href)
    const { verifySuiteCatalogSignature } = await import(pathToFileURL(resolve(platformRoot, 'src/domain/suite-catalog-signature.ts')).href)
    if (verifySuiteCatalogSignature(document, [...officialSuiteCatalogKeys, trusted]) !== 'ok') throw new Error('Previous catalog signature verification failed')
    const next = await readJson(output)
    const previous = new Map(document.entries.map(entry => [`${entry.id}@${entry.version}`, entry.contentHash]))
    for (const entry of next.entries) {
      const hash = previous.get(`${entry.id}@${entry.version}`)
      if (hash !== undefined && hash !== entry.contentHash) throw new Error(`Immutable entry changed: ${entry.id}@${entry.version}`)
    }
    console.log('Released entry versions are unchanged.')
    process.exit(0)
  }
  if (mode === 'sign') {
    if (!output) throw new Error('Signing requires an output path')
    const pem = process.env.CATALOG_ED25519_PRIVATE_KEY
    if (!pem) throw new Error('Missing catalog-release signing secret')
    const key = createPrivateKey(pem)
    if (key.asymmetricKeyType !== 'ed25519') throw new Error('Signing key must be Ed25519')
    const expected = createPublicKey(trusted.publicKey).export({ type: 'spki', format: 'der' })
    const actual = createPublicKey(key).export({ type: 'spki', format: 'der' })
    if (!expected.equals(actual)) throw new Error('Signing secret does not match the committed public key')
    document.signature = { keyId: trusted.keyId, signature: sign(null, suiteCatalogSignedPayload(document), key).toString('base64') }
    await writeFile(output, `${JSON.stringify(document, null, 2)}\n`)
  }
  if (document.signature?.keyId !== trusted.keyId || !verify(null, suiteCatalogSignedPayload(document), trusted.publicKey, Buffer.from(document.signature.signature, 'base64'))) throw new Error('Catalog signature verification failed')
  console.log('Catalog signature verified.')
}
