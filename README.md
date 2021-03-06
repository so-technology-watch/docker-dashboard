# Docker Dashboard

Dashboard for Docker

Use Docker Engine API : [https://docs.docker.com/engine/api/v1.37/](https://docs.docker.com/engine/api/v1.37/)

![Dashboard](https://github.com/ludovic-chaboud/docker-dashboard/blob/master/doc/images/dashboard.jpg)

## Install

Based on node.js and vue.js / socket.io.

* Install :
  * ```docker```, ```docker-compose```: [install_docker.sh](https://github.com/ludovic-chaboud/docker-dashboard/blob/master/install_linux/ubuntu/install_docker.sh)
  * ```node.js```, ```npm```: [install_nodejs.sh](https://github.com/ludovic-chaboud/docker-dashboard/blob/master/install_linux/ubuntu/install_nodejs.sh)

* Checkout this project and execute :
  * ```npm install```
  * ```npm run dev```

=> http://localhost:3000

## Configuration

### docker-compose

* create directory ```../workspace/app1``` from project directory
* create a ```docker-compose.yml``` file ```../workspace/app1/docker-compose.yml``` :
```
version: '3.5'

services:
  traefik:
    image: "traefik"
    volumes:
      - "/run/docker.sock:/var/run/docker.sock"
    ports:
      - "80:80"
      - "8080:8080"
```

## NPM dependencies

* [dockerode](https://www.npmjs.com/package/dockerode)
* [docker-events](https://www.npmjs.com/package/docker-events)
* [docker-compose-remote-api](https://www.npmjs.com/package/docker-compose-remote-api)

## License

MIT License
Copyright (c) 2018 - Ludovic Chaboud
