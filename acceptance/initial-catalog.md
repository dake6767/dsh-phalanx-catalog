# Initial declarative catalog

The initial entries preserve the supported suite behavior while moving catalog
publication outside the platform release. The source of truth for behavioral
checks is the pinned platform's equivalence test suite, loaded with the actual
unsigned publication through `DSH_PHALANX_CATALOG_TEST_FILE`.

| Entry | Catalog version | Acceptance |
| --- | --- | --- |
| officecli | 2.0.0 | Equivalence proved by `tests/suite-catalog-officecli.spec.ts`; real-service evidence reused from platform v0.1.18 |
| wecom | 2.0.0 | Equivalence proved by `tests/suite-catalog-wecom.spec.ts`; member-owned login evidence reused from platform v0.1.18 |
| minimax | 2.0.0 | Generated-adapter equivalence checked; fresh real-member acceptance pending platform release checkpoint |
| lark | 2.0.0 | Generated-adapter equivalence checked; fresh real bot call pending platform release checkpoint |
| hyperframes | 2.0.0 | Generated-adapter equivalence checked; fresh member render pending platform release checkpoint |

The prior real-service receipt is
[platform v0.1.18 acceptance](https://github.com/dake6767/dsh-phalanx/blob/v0.1.18/releases/acceptance/0.1.18.md).
The initial pandoc, ffmpeg and chromium entries retain the reviewed upstream
bytes; structural/download checks and generated entry-point checks cover them.
This record does not claim that the pending fresh real-service checks passed.
Release assets identify their publication run and exact catalog hash.
