import http from 'node:http';
import routes from './routes.js';

console.log(process.cwd(), 'bar')
const server = http.createServer();

server.on('request', (request, res) => {
    routes({request, res})
});

server.listen(8002);
