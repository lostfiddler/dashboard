import http from 'node:http';

// TODO https://discourse.wicg.io/t/proposal-transparent-window/5893/

const port = 8002;
const server = http.createServer();

server.on('request', (_request, res) => {
    res.writeHead(200);
    res.write('hello sexy ;\)');
    res.end();
});

server.listen(port);
