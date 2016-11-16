/*jshint esversion: 6, node: true*/
const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/',
    method: 'GET',
    handler: homeHandler
});

server.start(_ => {
  console.log(`server running at: ${server.info.uri}`);
});

function homeHandler(request, reply) {
    reply('Hello hapi');
}
