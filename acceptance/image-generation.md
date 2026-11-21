# Image Generation acceptance

The catalog entry `dsh-image-gen` at `1.0.0` uses `dsh-image-gen@0.11.4-phalanx.2`. The archive SHA-512 is `sha512-5keUGlCGWlZqyqi/NtHuOPoGkIxzI+eud4IBf2ZMK4rnReWHPpCDq7GWApbAUoU4jYfwBpv5VjZTfLncrwqf1w==`. The package builds from the upstream `0.11.4` source with compatibility changes for member paths and the managed channel. [Archive and source patch](https://github.com/dake6767/dsh-phalanx-catalog/releases/tag/0.1.39-image-gen-assets)

The 2026-11-20 ARM64 verification used the DSH rc.5 revision `9c2670d3bce5275e0d1610272958121af87787bb`. The platform test archive SHA-256 was `eafbc76cea6106b80b212075b9301de852a7feb09e3d5fbbc432bd4ea37f308d`.

- A signed entry installed with its upstream pending. Before setup, attempting to use it made zero outgoing image requests. Completing the three configuration fields enabled the channel in two already-running member instances without reinstalling.
- A member who received the package through group preinstallation generated a 1024×1024 PNG from a conversation. The chat image, gallery and workbench used the member-scoped routes.
- A member who installed the package from App Center edited the generated image through `POST /v1/images/edits` with `multipart/form-data` and received a different 1024×1024 PNG.
- Directory adoption, replay and an update of the same bundle preserved the platform's upstream configuration. A member without a native delivery could not use the configured image upstream through the other plugin gateway, and the member grant failed when used with another identity.
- The run used an isolated signing key and the configured `gpt-image-2.5-flare` model. The acceptance receipt SHA-256 is `f9621d3fa221aaa68e2e8a6c156cfc85c91d20369df185a20fbcd0c8386930bb`.
