# Mnemon

Catalog entry `dsh-mnemon@1.0.0` pins the npm package `dsh-mnemon@0.5.50` and the shared dependency `mnemon-cli-0-2-14`. The catalog targets Phalanx v0.1.38.

- The downloaded npm archive matches its registry SHA-512. The manifest's DSH range accepts v0.2.2-rc.3 and v0.2.2-rc.5 under DSH's prerelease-aware compatibility check.
- Both Linux archives from the [upstream v0.2.14 release](https://github.com/mnemon-dev/mnemon/releases/tag/v0.2.14) match the release checksums. Each contains a statically linked ELF executable for the corresponding architecture. The catalog also pins the unpacked executables' SHA-256 values.
- The catalog binds the verified executable to `MNEMON_CLI_PATH`, using the existing shared resource projection. Provider configuration and memory storage continue to belong to the member runtime.
- In-deployment import and member memory write and recall are pending maintainer validation.
