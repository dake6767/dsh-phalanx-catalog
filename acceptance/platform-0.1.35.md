# Catalog adaptations for platform 0.1.35

## Qiaomu Cover Design

The original `qiaomu-cover-design-dsh@0.1.3` archive matches the published SHA-512 integrity. A fresh group-preinstalled member and a fresh self-selected member each used the original plugin to complete a real DeepSeek `deepseek-flash` conversation. The original plugin generated and exported a 1024 × 1024 PNG using an OpenAI-compatible backend. The returned image and member workspace export shared SHA-256 `d167ba9499db09b41e6543ab825b7663737267b334e18598bb860c5150a6ca00`. Both member instances received platform tokens. The test did not place provider credentials in either member instance.

Seedream model `doubao-seedream-5-5-261028` generated a 2496 × 1664 text-prompt PNG (SHA-256 `c14670f4e70e22992ca6e7bf072ca546cb7b1bd02d1910ede7a1f2a3bca3c842`) and a 2048 × 2048 reference-guided PNG (SHA-256 `0c078dcd1024ca23ba162b0539e4afee5c8df79fa18b155de74001806b24d5b6`). The original plugin downloaded the reference-guided image through the member proxy and exported the same bytes. The download used a scoped public DNS diagnostic because the validation VM resolver returned a reserved test address.

## PPT Master

The pinned upstream skill generated an image using the configured OpenAI-compatible backend and exported an editable PPTX with that image and native text. The export was reopened and the native text was changed successfully. The original output SHA-256 was `912c3a3e48074f8571c1ae92ac72cc45681aa2e1dd0ec084fa4a6d5776868a98`. The member command rejected an explicit protected backend selector and reported disabled cloud narration when no provider was enabled. Edge generated a 3.192-second MP3 through the authenticated proxy in an isolated public DNS diagnostic. Paid cloud narration was not exercised.

## Design plugins

The platform installed the locked npm archive for DrawAI 0.4.4 and the locked original Huashu Design 3.3.0 archive. The empty-cache preinstalled ARM64 member opened both plugins on the first launch. Huashu Design registered its native skill. All six shared dependencies were mounted read-only. The member made zero registry requests.

| ARM64 output | SHA-256 |
| --- | --- |
| DrawAI motion preview | `e0760998772413b732274b1fd51da3e76deec6b176b43481cad13c8ae4346e8a` |
| DrawAI H.264 MP4 | `57bc570a1c2b0096ac3a5da8b277dfaaa0716c6194604aa0e5f1dcad79cf3104` |
| Huashu interactive HTML | `7379715d4c3dd7d64cea22267a09fdd14e94b4b03258c908fa9a49b70ceca7ed` |
| Huashu editable PPTX | `4e58f263ecff8b49562c8b6c37fc237b18d132c58bf236f062fce81e7372e7ea` |
| Huashu PDF | `0fc93fb0e041f8f01cabb4bc680014f0e27ff8f98860b1d6f842abe78340566a` |
| Huashu H.264 MP4 | `ea7a30fc22316c2be47d04504ed9052c403d0da209b8c879dafca90244ae9258` |

The amd64 check used the same product source and DSH revision. The published input hashes identify the
archives checked by the platform during preparation. DrawAI loaded on the first start and its original
canvas, model-assisted edit and export paths passed. Huashu Design registered its skill and produced
all four outputs. Six dependency trees stayed read-only and the member made zero registry requests.

| amd64 output | SHA-256 |
| --- | --- |
| DrawAI motion preview | `e0760998772413b732274b1fd51da3e76deec6b176b43481cad13c8ae4346e8a` |
| DrawAI H.264 MP4 | `e5ba2e415b1bb1277aa819fbdeaaa3a44db3497cfdb390d288577323c0830a9e` |
| Huashu interactive HTML | `84d71dd6005b9a7a4cd18bb814aef15f06ec624f53bfc4bc8f05f559db469cda` |
| Huashu editable PPTX | `0ff504e9f312984783462c4c884242610c9c02d4e7c278b5add10f5636f3ad72` |
| Huashu PDF | `fc21927de90a88bcc45f8c45cefcb4621ce1f75cbf2c32e7a4b2d8699da7310b` |
| Huashu H.264 MP4 | `16e0fa66e2b1fea27611aff5651751f2c991e9ff30f17baf74cf9b95fa86c610` |
