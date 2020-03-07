# Introduction

Welcome to the Enseada User Guide!

Enseada is a modern, fast and scalable package registry, designed from the ground up to run in elastic, container-based environments and to be highly available and distributed.

It offers:
- [Multiple package repositories](./package-registries.md)
- [Multiple storage backends](./storage.md)
- Strong authentication based on [OAuth 2.0 tokens](./authorization.md#oauth-2.0)
- Flexible [ACL engine](./authorization.md#acl) to manage user permissions
- Complete [management API](../developers/apis.md)
- CDN and cache friendly

The server is written to be small and fast, and its only dependency is the database.
It uses [CouchDB](https://couchdb.apache.org) to store data about users, repositories and access control, while
delegating to the storage engine for reading and writing artifacts. Thanks to its completely stateless nature it can be horizontally scaled with ease, or replicated over multiple geographic regions.
