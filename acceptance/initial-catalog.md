# Initial declarative catalog

The initial entries preserve the supported suite behavior while moving catalog
publication outside the platform release. The source of truth for behavioral
checks is the pinned platform's equivalence test suite, loaded with the actual
unsigned publication through `DSH_PHALANX_CATALOG_TEST_FILE`.

| Entry | Catalog version | Acceptance |
| --- | --- | --- |
| officecli | 2.0.0 | Equivalence proved by `tests/suite-catalog-officecli.spec.ts`; real-service evidence reused from platform v0.1.18 |
| wecom | 2.0.0 | Equivalence proved by `tests/suite-catalog-wecom.spec.ts`; member-owned login evidence reused from platform v0.1.18 |
| minimax | 2.0.0 | Generated-adapter equivalence checked; fresh real-member call passed on candidate run-39173900981 |
| lark | 2.0.0 | Generated-adapter equivalence checked; fresh real bot call passed on candidate run-39173900981 |
| hyperframes | 2.0.0 | Generated-adapter equivalence checked; fresh member render passed on candidate run-39173900981 |

The prior real-service receipt is
[platform v0.1.18 acceptance](https://github.com/dake6767/dsh-phalanx/blob/v0.1.18/releases/acceptance/0.1.18.md).
The initial pandoc, ffmpeg and chromium entries retain the reviewed upstream
bytes; structural/download checks and generated entry-point checks cover them.
Release assets identify their publication run and exact catalog hash.

## Fresh real-service acceptance

The following checks passed on 2026-10-19 (UTC), using the exact Linux amd64
platform candidate [run-39173900981](https://github.com/dake6767/dsh-phalanx-candidates/releases/tag/run-39173900981),
source commit `5b45ebc2a3eeeffcb29572eb0d627a5c42d1d07d` and image digest
`sha256:ce4e7f16cb89bdc3a52fd54534da50a8c223d31f62d46fe6ed3650b295b70bda`.
The test harness commit was `cb7ca149358f5fa722e4c564dc35270319c50374`.

The installed candidate fetched the signed production catalog from the default
mainland URL, through `https://ghfast.top/`, and installed all five suites.
The catalog was [catalog-39172197131](https://github.com/dake6767/dsh-phalanx-catalog/releases/tag/catalog-39172197131),
SHA-256 `0e0a712b16bf08125ed32f73c0b519f098c0bdd99f02ad958edd40bf35583bb4`,
signed by `official-1d3e959e7923e4f4`. No local catalog server or test signing key
was supplied. Preparation passed in 274.23 seconds.

Each fresh check used a new native member session with real DSH and verified
that the provider credential was absent from member output:

| Suite | Result | Stage duration | Output SHA-256 |
| --- | --- | --- | --- |
| minimax 2.0.0 | Real provider call passed | 56.10 s | `aa5efda29f6363ecda9a821a35e5c1742e2e6c13d8cfeeb6592edf6e0885e780` |
| lark 2.0.0 | Real bot call passed | 23.69 s | `ed1051ded220c0392e84585ccf28d1af15dfec0a64322e35a22284808a2a50bf` |
| hyperframes 2.0.0 | Member render passed: 320 × 180, 2-second video | 180.36 s | `72c0c37b795da0f37ef0706155cbe5233a3e06eccf49cb93bbdb64b28624ed5c` |

These results cover the initial catalog entries and their adapters. They do not
claim completion of the platform candidate's separate installation, upgrade,
and other release checks. No catalog entry bytes or versions changed to record
these results.
