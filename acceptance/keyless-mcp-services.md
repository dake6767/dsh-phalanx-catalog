# Keyless MCP services

Entry version 1.0.0 for Exa, DeepWiki, and AIHOT requires Phalanx 0.1.37 or later.
The assembled document passes catalog validation on the pinned Phalanx 0.1.41
commit and on the Phalanx 0.1.43 release commit
`386ad2e8c77adefd8794a09a3a531f2c75ff246b`.

An isolated gateway used the 0.1.43 catalog import configuration, administrator
connection diagnostic, member route, and HTTP transport with test identities.
It reached each real HTTPS endpoint without an API key.

| Service | Tools discovered | Successful member call |
| --- | ---: | --- |
| Exa | 2 | `web_search_exa` returned results for a public documentation query. |
| DeepWiki | 3 | `read_wiki_structure` returned topics for a public repository. |
| AIHOT | 11 | `aihot_get_latest` returned public news results. |

The new catalog withdraws the 12306 entry and its gallery tag assignment.
Historical signed releases remain available. Existing installations retain
their saved 12306 service configuration. The Amap entry keeps its existing
version and content hash.

AIHOT uses its direct public endpoint. See the
[AIHOT usage rules](https://aihot.news/terms) for supported uses.
