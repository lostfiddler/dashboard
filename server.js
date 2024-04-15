import http from 'node:http';
import {readFileSync} from 'node:fs';

// TODO https://discourse.wicg.io/t/proposal-transparent-window/5893/
// https://progress-page.glitch.me/

const port = 8002;
const server = http.createServer();

server.on('request', (request, res) => {
    if(['.js', '.css'].some(ext => request.includes(ext))) {
        res.writeHead(200, {
            "Content-Type": {
                '.js': 'text/javascript',
                '.css': 'text/css'
            }[request.url.slice(request.url.lastIndexOf('.'))]
        });
        res.write(readFileSync('./static' + request.url , 'utf8'));
        res.end();
        return;
    }

    res.writeHead(200);
    res.write(readFileSync('./static/index.html', 'utf8'));
       res.end();
});

server.listen(port);
