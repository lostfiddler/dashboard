import http from 'node:http';
import {readFileSync} from 'node:fs';

// TODO https://discourse.wicg.io/t/proposal-transparent-window/5893/
// https://progress-page.glitch.me/

const port = 8002;
const server = http.createServer();

server.on('request', (_request, res) => {

    if(_request.url === '/styles.css') {
        res.writeHead(200, {"Content-Type": "text/css"});
        res.write(readFileSync('./static/styles.css', 'utf8'));
        res.end();
        return;
    }
    if(_request.url === '/script.js') {
        res.writeHead(200, {"Content-Type": "text/javascript"});
        res.write(readFileSync('./static/script.js', 'utf8'));
        res.end();
        return;
    }

    res.writeHead(200);
    res.write(readFileSync('./static/index.html', 'utf8'));
       res.end();
});

server.listen(port);
