# Mnemon

Catalog entry `dsh-mnemon@1.0.0` pins the npm package `dsh-mnemon@0.5.50` and the shared dependency `mnemon-cli-0-2-14`. The catalog targets Phalanx v0.1.38.

- The downloaded npm archive matches its registry SHA-512. The manifest's DSH range accepts v0.2.2-rc.3 and v0.2.2-rc.5 under DSH's prerelease-aware compatibility check.
- Both Linux archives from the [upstream v0.2.14 release](https://github.com/mnemon-dev/mnemon/releases/tag/v0.2.14) match the release checksums. Each contains a statically linked ELF executable for the corresponding architecture. The catalog also pins the unpacked executables' SHA-256 values.
- The catalog binds the verified executable to `MNEMON_CLI_PATH`, using the existing shared resource projection. Provider configuration and memory storage continue to belong to the member runtime.
- In-deployment import and member memory write and recall are pending maintainer validation.

## Fork compatibility release

Catalog entry `dsh-mnemon@1.0.1` selects `dsh-mnemon@0.5.50-phalanx.1` at fork commit `b17e14c2a975c23987a257e3eda60d2fd25d8bdb`. The package retains upstream compiled modules and licenses. The only payload changes are the package version and the activation expression in `cordis.patch.yml`.

- A real DSH rc.5 loader reproduced the original expression failure under managed entry IDs. The replacement passed native and managed activation, explicit boolean disabling and expression-based disabling.
- On Linux arm64 with the Phalanx v0.1.38 image and DSH rc.3, archive integrity verification, installation with lifecycle scripts disabled, managed bundle preparation, and offline DSH activation with plugin inventory and service checks passed.
- The matching Mnemon CLI 0.2.14 executable reported its version from a read-only mount in the same image. Member-facing memory write and recall remain pending.

## Authenticated web management

Catalog entry `dsh-mnemon@1.0.2` pins fork package `0.5.50-phalanx.2` at `0d21bef5cc42ce93a4d280e5153ffe2a83b6cf6a`. This build sets the plugin's existing `remoteAccess` policy to `trusted-host` at startup. It uses the existing DSH gateway authentication and the same shared Mnemon CLI.

Real DSH rc.3 and rc.5 instances on macOS accepted a write from an authenticated browser session and read back the sample from runtime memory. Requests with no browser session could not write. The native profiles also reported writable Mnemon settings. The managed profiles passed the activation and service inventory checks with their runtime paths mapped to the local DSH install.

## Upstream npm 0.5.54

Catalog entry 1.0.5 requires platform 0.1.41 or newer. It pins the official
npm archive and identifies the exact previous catalog archive, 0.5.5003.
New installations use the existing `trusted-host` default and the pinned
shared Mnemon CLI 0.2.14.

On an isolated ARM64 installation of the v0.1.41 implementation, members
installed 0.5.54 from App Center and through group preinstallation. Both
read and wrote memory. The preinstalled member could not read the other test member's
memory note. An existing member running 0.5.5003 restarted after the catalog
update and retained its shared CLI, explicit read-only setting and existing
memory. The member then confirmed the archive replacement in App Center and
verified the same memory, settings and CLI on 0.5.54.

The [v0.1.41 Candidate](https://github.com/dake6767/dsh-phalanx/actions/runs/45338113844)
passed CI, both native Linux suites, and the formal upgrade from v0.1.40.
The isolated Mnemon acceptance used the same migration implementation and
runtime revision as that Candidate.
