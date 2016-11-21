/*jshint esversion: 6, node: true*/
const Fs = require('fs');
const Hapi = require('hapi');
const Rot13 = require('rot13-transform');
const Path = require('path');

const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/',
    method: 'GET',
    handler: (request, reply) => {
        const stream = Fs.createReadStream(Path.join(__dirname, 'public\\stream.file'));
        reply(stream.pipe(Rot13()));
    }
});

server.start(_ => console.log('Stream server started at: ' + server.info.uri));
