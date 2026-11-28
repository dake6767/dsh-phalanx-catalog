# Deep Whale Skin Manager

Entry `deep-whale-skin-manager@1.0.0` pins
[`@smalltailqwq/dsh-client-ui-skin-deep-whale-manager@0.1.11`](https://www.npmjs.com/package/@smalltailqwq/dsh-client-ui-skin-deep-whale-manager/v/0.1.11).
The [upstream project release v0.1.12](https://github.com/Small-tailqwq/dsh-deep-whale/releases/tag/v0.1.12)
at `c3847026d5792e3f73da2d162801bcd12e0245df` lists the manager as version
0.1.11. The downloaded npm archive matches the registry's SHA-512 integrity
and has SHA-256
`aa3d2511f046d67aec9c5892662d31f5e04fb457834ffb510b3b720efcf19884`.
The scope of this entry is the manager. Skins are installed separately.

Phalanx 0.1.44 (`28b92db8bf6a3d2f2bdd035ac43afe8f18a27fd6`) validated the
catalog declaration and extracted the bilingual display titles and SVG icon
from the bundle. All eight signing and immutability cases passed. The new
entry uses the existing Themes & Appearance tag.

In an isolated DSH Web 0.2.2-rc.5 profile, the original manager loaded and the
authenticated skin catalog endpoint returned HTTP 200. With the manager
installed alone, the endpoint showed no separate skins configured or active.
An authenticated Chromium session opened Settings → Skins and displayed
Official and the empty list. External requests were blocked during the test.
Switching a separately installed skin, administrator import and App Center
installation still need end-to-end coverage.
