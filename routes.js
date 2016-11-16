/*jshint esversion: 6, node: true*/
const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/{name}',
    method: 'GET',
    handler: (request, reply) => {
        reply('Hello ' + encodeURIComponent(request.params.name));
    }
});

server.start(_ => console.log('Server started on ' + server.info.uri));
