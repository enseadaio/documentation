# Install and update

Enseada is released as a single static binary that can be downloaded and run without any dependency outside of CouchDB.

You can download the appropriate executable for your environment from the [release page](https://github.com/enseadaio/enseada/releases).

## Linux

Coming soon

## macOS

Coming soon

## Windows

Coming soon

## Docker

An official Docker image is available on [Docker Hub](https://hub.docker.com/r/enseada/enseada).

Three different image tags are available:

- `latest` marks the most recent stable release. The same binary can be found [here](https://github.com/enseadaio/enseada/releases/latest).
- `x.y.z` provides the correspondent version. These images are immutable.
- `edge` provides nightly builds compiled from the source code [mainline](https://github.com/enseadaio/enseada/tree/develop) (which is the `develop` branch). They are built on every code commit and can therefore be
unstable, broken or buggy. **Use them at your own risk**.

### Pull and Run

```bash
docker pull enseada/enseada:latest

docker run --name enseada -p 9623:9623 <various environment variables> enseada/enseada:latest
```