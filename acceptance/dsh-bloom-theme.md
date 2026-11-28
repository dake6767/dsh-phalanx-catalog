# Bloom Theme

Entry `dsh-bloom-theme@1.0.0` pins the upstream
[`dsh-bloom-theme@0.30.1` npm package](https://www.npmjs.com/package/dsh-bloom-theme/v/0.30.1).
The npm gitHead matches [release v0.30.1](https://github.com/webkubor/dsh-bloom-theme/releases/tag/v0.30.1)
at `ab06f1f05058afccfa3c040255ad89dc4a2157ea`. The archive's SHA-512 matches npm's
integrity metadata. Its SHA-256 is
`d376e155714817556b91ec8bd2a5f0a4ca2c1d8db09ceade75e4c2aa7fd2920a`.
The archive contains the built server and client, Cordis bundle patch,
locale metadata and icon. The package has zero runtime dependencies.

Phalanx 0.1.44 (`28b92db8bf6a3d2f2bdd035ac43afe8f18a27fd6`) assembled and
validated the catalog. Its metadata reader extracted both display titles and
the packaged SVG. The signing and immutability suite passed all eight cases.

An authenticated DSH Web 0.2.2-rc.5 session loaded the npm bundle. The Bloom
version endpoint returned the expected host version. Chromium applied the
default palette and five Bloom stylesheets, including the glass styling.
It restored the saved Cinnabar palette after a refresh. This isolated test
blocked external requests. Administrator import and installation from the
Phalanx App Center still need end-to-end coverage.

The upstream theme settings include a control to turn off anonymous UI
event statistics.
