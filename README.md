# dsh-phalanx catalog

Signed declarative catalogs for dsh-phalanx. Suite and shared dependency entries
live under `entries/suite/` and `entries/dependency/`. Catalog JSON contains data,
never executable preparation scripts. The platform generates commands using its
built-in adapters. The latest Release publishes `catalog.json`.

## Change an entry

1. Edit an entry or add one named after its `id`. Pin upstream versions, file
   SHA-256 values and Git commits. Declare services and dependencies. Increase
   the catalog entry version whenever its content changes.
2. Set `engines.platform` to a compatible range; entries using the current
   adapters require `>=0.1.19`. New adapter behavior needs a platform release.
3. Open a pull request. CI checks the document using the exact platform commit
   in `platform.json`, and runs the platform's equivalence tests against these
   actual entries. Catalog changes do not require a platform release.
4. Record real-service acceptance under `acceptance/`; identify entry versions,
   platform commit, test result and reused evidence. Never include credentials.
5. Merge, then dispatch **Catalog** on `main` to sign and publish a Release.
   Release publication is available only through this workflow.

## Signing and rotation

The `catalog-release` environment holds the environment secret
`CATALOG_ED25519_PRIVATE_KEY`: an Ed25519 private key in PKCS#8 PEM format,
including its header, footer and newlines. Only the publishing job references
this environment. It accepts the `main` branch only. `trusted-key.json` contains
the public SPKI PEM and `keyId`; the platform compiles the same public key.

The maintainer generates the official pair. Never commit the private key or
put it into issues, logs, pull requests or test fixtures. Signing checks that the
secret matches the committed public key before producing an asset.

To rotate, first release a platform trusting both public keys. Then replace the
publishing secret and public `keyId`, publish a catalog signed by the new key,
and later retire the old key in a platform release. The publishing job verifies every historical signed catalog and refuses any
changed content for an already published id and version, even after that version
leaves the latest directory. Preserve historical Releases for this check.

## 本地检查

在平台源码固定依赖已安装后，从本仓库执行：

```bash
node --import ../platform/node_modules/tsx/dist/loader.mjs scripts/catalog.mjs assemble ../platform catalog.unsigned.json
node --import ../platform/node_modules/tsx/dist/loader.mjs ../platform/scripts/check-suite-catalog.ts catalog.unsigned.json 0.1.19
```

实际目录由独立的发布工作流检查、签名并发布；私钥只进入发布环境的
Actions secret。真实验收记录存于 `acceptance/`，不能把未执行的验收写成通过。
