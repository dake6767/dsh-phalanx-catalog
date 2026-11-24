# PPT Master acceptance

`ppt-master@1.0.1`, content hash `d8042252a2f26f77657999e6468eea0db744d3acd6b35954e4037064534bd0e1`, is published in [catalog-40063684824](https://github.com/dake6767/dsh-phalanx-catalog/releases/tag/catalog-40063684824). The document SHA-256 is `b8b616932b2af12bf856b84cb0b72de6e85896e3c3680cf3820a2666e1a786e2`; its checksum and official signature were verified. The application consumed these exact signed bytes through a read-only HTTP mirror using the unchanged official trust key.

Result on 2026-10-24 UTC: **rerun passed**, 473.785 seconds, Linux arm64 native member instance. Earlier failed results remain retained separately. Runtime implementation matches public platform snapshot `46082f33b815502f70a536feda0fbedd242ad285`; platform package SHA-256 `3e3361a984be49c112054e1d09f31cfec9f0d719403a007805504f12b970a82a`, native image digest `sha256:9965e7be2df8044ace5c1256d55c4d413c44c94873af058484ec49c9f41007c0`. Complete platform Candidate, installation and upgrade checks are separate release requirements.

The real catalog wizard installed the complete pinned skill, pandoc and 88 locked Python packages. Skipping all backend variables left execution disabled and returned the existing exit-125 notice. Member-owned OPENAI variables remained intact.

Real member tools then completed:

- Edge narration through `edge_tts --proxy "$HTTPS_PROXY"`, without a platform provider key: a 3.192-second MP3, independently decoded after export. The original upstream Edge helper does not pass this proxy; the entry instructions use the CLI.
- Wikimedia image search, without a provider key: a valid 5668 × 4174 JPEG and source manifest written to the member project.
- One delegated MiniMax `image-01` image, 512 × 512, written back to the member project and included in the output deck; a successful usage record was present.
- Native editable-text PPTX export with and without a generated image. Both decks were loaded, text edited, saved and loaded again through python-pptx; the image deck contained a native picture shape.
- Protected cloud-narration option rejection, member `.env` endpoint isolation, and absence of platform provider variables from the native member environment.

The existing invocation limits stayed at 120 seconds, 512 MiB, one CPU and 64 PIDs. Temporary input and platform credential carriers were removed after owned processes and containers stopped. Temporary VM DNS records were restored byte-for-byte with original mode and owner.

| Output | SHA-256 |
| --- | --- |
| No-image PPTX | `31e8bd01da64c80c12eaca8a494f94ddc90f102e283086becc219aac9e61db2d` |
| Image PPTX | `c427370a0dd0d6c6cf6cdb8438921184285f05533ed31a8c9a4abca786f12e72` |
| Generated image | `fac45bc9dcea0c2fe0f61c3529a05fbcd9987ee11eb1ac98c6a5324f34487dc4` |
| Edge MP3 | `fb4420801e9ec1b304eec283c091a644f350c5cac04c6d271a2d3ee8d62b2fd8` |
| Acceptance result | `a24cb3e36258b217ecb9c695623816fd293d24ebc52081f5c6c0303797fa18ad` |
| Credential cleanup | `d0c8576b10bfc58c9bafea4b69bf7907276de005cb350cb4757d85bcb7c6d6ba` |
| DNS restoration | `e26ce29053fbffcfdc7f04fb8adecd47ba3b6ee985aeb36d5d41e947cf09b0c6` |

The actual v0.1.23 reader accepts the signed nine-entry document: all eight earlier entries remain usable and only PPT Master requires a platform upgrade. The v0.1.24 reader accepts all nine. Entry dependencies and execution templates are unchanged from 1.0.0; 1.0.1 updates the member narration instructions.

## Confirmation in the DSH Web sidebar

The PPT Master skill entry `1.0.3` pins the fork commit
[`c6517c0eb59c2f953cb8c6660309cc707f885845`](https://github.com/dake6767/ppt-master/commit/c6517c0eb59c2f953cb8c6660309cc707f885845),
based on the existing 6.7.3 pin. It adds the five exact Flask-related Python
pins and retains the installed skill identity, pandoc, and the existing image
and narration service configuration. The separate companion plugin entry
`1.0.0` installs
[`dsh-ppt-master-confirm@0.1.0`](https://github.com/dake6767/ppt-master/releases/tag/dsh-confirm-v0.1.0).
The archive SHA-256 is `6ffa6bf0c02a8755ddf7b8a2d5af637aec874855dc973bbb9d5786d889aff701`.

The package was installed through the native DSH 0.2.2-rc.5 Web profile.
Its sidebar opened the confirmation code form. Through a subpath reverse
proxy on the same DSH host, a Chromium browser submitted Stage 1 and the
final Stage 2. The original wait commands resumed, the selection and final
confirmed receipts were written, and the final browser action closed the
service. Cross-origin confirmation and expired codes were rejected.

On Linux ARM64 with Python 3.12.3, the exact skill and plugin artifacts and
pinned Python wheels passed the attribution guard, subpath asset and
recommendation reads, cross-origin rejection, shutdown, and the original
standalone loopback path. The platform catalog checker was run against
v0.1.41. This verification used isolated DSH and Linux fixtures. The full
administrator import and existing-member upgrade were outside this run.

## Confirmation links from the conversation

PPT Master skill entry `1.0.4` pins
[`185bc84822cbe76893caaf3d4d3b2eb7abeaea70`](https://github.com/dake6767/ppt-master/commit/185bc84822cbe76893caaf3d4d3b2eb7abeaea70).
The companion entry `1.0.1` pins
[`dsh-ppt-master-confirm@0.1.1`](https://github.com/dake6767/ppt-master/releases/tag/dsh-confirm-v0.1.1),
SHA-256 `61c38a497652f68a5f302649981ef9b816b464e693d934ef2966ff076cb1229b`.
The Web companion resolves confirmation links on click against the active DSH
document base and removes its separate sidebar panel.

The exact plugin was installed in native DSH 0.2.2-rc.5. Chromium clicked the
link emitted by the actual confirmation server using a test transcript
anchor. The click opened the correct page both at the native root and under
a reverse-proxy mount. Both stages were submitted in the same page without
refresh, both original waiter processes resumed, and the final receipt was
confirmed. Unrelated links were left alone.

An ARM64 Linux test verified the exact new plugin, the exact old 0.1.0
plugin and the new skill. The old companion still got the code handoff, and
standalone loopback remained usable. When upgrading separately, update the
skill first. These checks used isolated runtime fixtures, without an
administrator import or existing-member upgrade end to end.
