# Catalog entries for platform 0.1.39

- Guizang Design pins `dsh-guizang-design@0.1.5-phalanx.1`, its default seed, and Chromium build 1248. The platform acceptance run verified card PNGs, page PDF and long-image exports, and continuation of Huashu PDF export from the same member workspace.
- Image Generation pins `dsh-image-gen@0.11.4-phalanx.2`. The entry allows installation before credentials are supplied. Acceptance exercised generation and multipart editing against an OpenAI-compatible provider.
- Mnemon pins `dsh-mnemon@0.5.50-phalanx.3` and supplies the web-management configuration on managed install. The shared Mnemon CLI dependency stays at 0.2.14. Acceptance exercised first sign-in, App Center installation, and upgrade with existing memory and explicit access settings.

The supported platform is pinned in [platform.json](../platform.json). Platform validation is recorded in the [v0.1.39 release](https://github.com/dake6767/dsh-phalanx/releases/tag/v0.1.39).
