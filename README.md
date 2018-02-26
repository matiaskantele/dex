# DevOps Starter [![CircleCI](https://circleci.com/gh/matiisi/devops-starter.svg?style=shield)](https://circleci.com/gh/matiisi/devops-starter) [![Coverage Status](https://coveralls.io/repos/github/matiisi/devops-starter/badge.svg)](https://coveralls.io/github/matiisi/devops-starter)

DevOps toolkit starter pack.

## Features

* Node.js :: REST API server
* CircleCI :: Running automatic tests
* Docker  :: Container technology
* Coveralls :: Code Coverage badge to GitHub

## Development

```zsh
$ yarn test # run tests

$ yarn dev # start app locally
```

### Docker

```zsh
$ docker image build -t devops-starter:0.1.0 . # build container image with name and tag

$ docker images # list container images

$ docker container run --name devops-starter -it devops-starter:0.1.0 # run container image

$ docker container ps -a # list all containers
```

### Cleanup

```zsh
$ docker container rm devops-starter # remove container

$ docker image rmi devops-starter:0.1.0 # remove container image

$ docker image rmi node:carbon-alpine# remove container base image
```
