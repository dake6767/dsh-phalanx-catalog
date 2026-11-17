# MCP catalog migration for platform 0.1.37

Amap and 12306 enter the signed catalog at entry version `1.0.0`. Both entries
require platform 0.1.37 or later.

| Entry | Adapter | Content SHA-256 |
| --- | --- | --- |
| Amap | Remote HTTPS with administrator credential binding | `527d030925697992b284f52de65622eb2a190e729242475a0f2f3913d11bd6c6` |
| 12306 | Shared Node runner from a pinned GitHub source archive | `0386c85acb35b746c963d2cb7ba03a9de9d6ed599c3df346e5663852115f5b1e` |

The platform's equivalence test compares the assembled entries in this repository
with both installed connection templates from platform 0.1.36. The endpoint and
credential binding for Amap are identical. The 12306 archive commit, archive
hash, preparation command and launch path are identical. Both equivalent
targets keep the saved version eligible for continued use without an update
prompt. The old reader keeps the compatible suites and skips the MCP entries.

The catalog checks use the public candidate SHA in [platform.json](../platform.json).
They cover construction, signatures, immutable historical entry versions,
gallery metadata and both existing MCP connection templates. Credentials remain
in each installation and do not appear in a published catalog.
