# DevOps Experience [![CircleCI](https://circleci.com/gh/matiisi/dex/tree/master.svg?style=shield)](https://circleci.com/gh/matiisi/dex/tree/master) [![Coverage Status](https://coveralls.io/repos/github/matiisi/dex/badge.svg)](https://coveralls.io/github/matiisi/dex)

DevOps example of a fully automated modern development workflow.

## Features

* Node.js :: REST API server
* CircleCI :: Running automated tests and building deployable docker image
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

#### GCP Setup
1. Select/Create Project
2. Enable billing for the project
3. Enable the Kubernetes Engine, Container Builder and Resource Manager APIs


