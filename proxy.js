/*jshint esversion: 6, node: true*/
const Hapi = require('hapi');
const H2o2 = require('h2o2');

const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.register(H2o2, err => {
    if (err) throw err;
});

server.route({
    path: '/proxy',
    method: 'GET',
    handler: {
        proxy: {
            host: 'localhost',
            port: 65535
        }
    }
});

server.start(_ => console.log('Proxy server started at:' + server.info.uri));
