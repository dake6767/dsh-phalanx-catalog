# Context7

Entry version 1.0.0 enables Context7 as a remote MCP service for Phalanx
0.1.44 and later. It uses the [official MCP endpoint and authorization
header](https://context7.com/docs/resources/all-clients). The administrator
may omit the API key when importing the service.

The assembled catalog passed validation using the platform commit
`28b92db8bf6a3d2f2bdd035ac43afe8f18a27fd6`. With the 0.1.43 reader, the
existing entries loaded and Context7 was the only entry requiring an upgrade.

On an isolated 0.1.44 gateway, administrator discovery found
`resolve-library-id` and `query-docs`. A member test identity called both on
the public endpoint and retrieved TypeScript documentation without an API key.

Using the same import declaration, the request builder produced no
Authorization header for an empty value and a Bearer header for a fictional
value. The fictional value stayed local. The platform's acceptance also
covers updating and clearing optional credentials with a local upstream.
This check used no authenticated calls to Context7.
