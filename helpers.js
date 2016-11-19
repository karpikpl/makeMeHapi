/*jshint esversion: 6, node: true*/
const Hapi = require('hapi');
const Vision = require('vision');
const Handlebars = require('handlebars');
const Path = require('path');

const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.register(Vision, err => {
    if (err) {
        throw err;
    }
});

server.route({
    path: '/',
    method: 'GET',
    handler: {
        view: 'index2.html'
    }
});

// http://hapijs.com/tutorials/views

server.views({
    engines: {
        html: Handlebars
    },
    path: Path.join(__dirname, 'templates'),
    helpersPath: Path.join(__dirname, 'helpers')
});

server.start(_ => console.log('Running views with helpers server at: ' + server.info.uri));
