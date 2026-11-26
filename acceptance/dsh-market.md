# DSH Market

Entry `dsh-market@1.0.0` pins the upstream
[`dshmarket@1.84.2` prebuilt archive](https://github.com/dsh-market/dsh-market/releases/tag/v1.84.2),
built from `325c5bccf37b9d2f293f2170cff3fa717c120220`. Archive SHA-256
`273c9557e50fbcbe6d9e688bbb7f747f64ae1c377c4ef70c352ed60c10630696`
matches the digest GitHub reports.

The catalog assembled and passed validation using Phalanx 0.1.44
(`28b92db8bf6a3d2f2bdd035ac43afe8f18a27fd6`). The archive loader fetched the
public asset, matched its SHA-512 integrity value, and verified the DSH bundle
manifest. The catalog signing and immutability suite passed all eight cases.

An isolated DSH Web 0.2.2-rc.5 profile loaded the original bundle. An
authenticated Web session received HTTP 200 from the market status
endpoint and reported version 1.84.2. The administrator import and App Center
installation still need end-to-end coverage.

DSH Market's Web installation flow applies its own policy, independently of
Phalanx's per-group **Add plugins** setting.
