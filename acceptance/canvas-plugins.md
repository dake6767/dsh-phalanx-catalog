# Canvas plugins

Catalog verification used the platform 0.1.41 release tree
(`27d086255c343082cd5060c85d1d3f3d4f5bd149`) and DSH 0.2.2-rc.5.

- DrawAI entry `1.0.1` pins `dsh-drawai@0.4.10-web.1` from
  [the compatibility release](https://github.com/dake6767/dsh-drawai/releases/tag/v0.4.10-web.1).
  Source starts at upstream `9248256a96af5f7a9a223d3f96dbe5faabdbddbd`.
  The path fix is `d7e5716bbd49020dc32d500faca86f01e05fd813`, and the release
  commit is `175132f289bee15e226e0e501da223b8f297b873`. Archive SHA-256
  `47d0b8bb0f25882d08b97d21ce447980ed49a2ae0e503bf35bacb472c0644b10`.
- Excalidraw Canvas entry `1.0.0` pins `dsh-excalidraw-canvas@0.1.0` from
  [its GitHub release](https://github.com/dake6767/dsh-excalidraw-canvas/releases/tag/v0.1.0).
  Source commit `e38812e6653f4d5595484b257e63c9585936d3d2`. Archive SHA-256
  `c84245a49218c104219f1987ab85526a7c35beb6b0fdc4b2c49b434b489ef333`.
  Its layout and selection checks passed.
- The platform's authenticated HTTP dispatch reproduced a plain-text 403 for
  the stock DrawAI 0.4.4 and 0.4.10 client endpoint under a member mount. It
  routed the fixed endpoint to the runtime with the mount stripped. The
  DrawAI component suite passed 426 checks, including the create action with
  a root base and a path-based reverse proxy.
- An authenticated native DSH Web session opened the DrawAI and Excalidraw
  write routes. DrawAI created and reopened a document, and Excalidraw saved
  a scene. On ARM64 Linux the shipped host modules from both archives
  created, detected duplicates and read back scenes through root and
  subpath HTTP requests in an isolated workspace.
- ARM64 Linux verified the five existing DrawAI video resource archive
  checksums and loaded the shared render runtime. The new DrawAI package
  rendered a Chromium preview and a 320×180 H.264 MP4. The MP4 SHA-256 was
  `2bc05602494a0c0d075d29bd1ecededb2bab91d21928748ae0ddf523b7894729`.
  The upstream application returns 503 for image-generation actions and
  the upstream disabled-image test found zero provider requests.
- These checks cover the exact bundles, authenticated native host loading,
  the platform routing behavior, and ARM64 rendering. The test did not run
  the administrator catalog import or member upgrade end to end.
