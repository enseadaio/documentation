# Developer Guide

Enseada is designed to be easily integrated into other systems.
All functionalities are available through a RESTful API protected by OAuth tokens.

The scopes required by each endpoint are defined in the [API Reference documentation](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/enseadaio/enseada/develop/docs/openapi.yml#section/Authentication/oauth). Additional access control is evaluated beside the authorized scopes to ensure that the user is allowed to perform the operation.