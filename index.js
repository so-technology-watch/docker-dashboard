const express = require('express');
const app = express();
const docker = require('./index/docker');
const server = require('http').createServer(app);  
const io = require('socket.io')(server);
const ioClients = [];
const emit = (channel, data) => {
  for(const ioClient of ioClients) {
    ioClient.emit(channel, data);
  }
}
const DockerCompose = require("./index/dockercompose");
const dockerCompose = DockerCompose({cwd: '/home/linux/shared/workspace/app1'});

const path = require('path');
const baseDir = path.join('..');
const workspaceDir = path.join(baseDir, 'workspace');
const projectName = 'app1';
const projectDir = path.join(workspaceDir, projectName);

const __ = {
  app, docker, dockerCompose, io, ioClients, emit, workspaceDir, projectName, projectDir
}

require('./index/socketio')(__);
require('./index/routes')(__);

app.use(express.static('web'));

server.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});