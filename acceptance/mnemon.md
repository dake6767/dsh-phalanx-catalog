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
