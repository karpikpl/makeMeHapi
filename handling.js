/*jshint esversion: 6, node: true*/
const Hapi = require('hapi');
const Inert = require('inert');
const Path = require('path');

const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.register(Inert, err => {
    if (err) {
        throw err;
    }
});

server.route({
    path: '/',
    method: 'GET',
    handler: {
        file: Path.join(__dirname, 'index.html')
    }
});

server.start(_ => console.log('Server started on ' + server.info.uri));
