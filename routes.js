import {readFileSync} from 'node:fs';
import initData from './initData.js';

export default (props) => {
    const { request, res } = props;
    if(['.js', '.css'].some(ext => request.url.includes(ext))) {
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

    if(request.url === '/data') {
        const data = initData()
        res.writeHead(200, {"Content-Type": 'application/json'})
        res.write(JSON.stringify(data));
        res.end()
        return;
    }

    if(request.url === '/memory') {
        const data = readFileSync('/proc/meminfo')
        res.write(data)
        res.end()
        return;
    }

    if(request.url === '/ports') {
        const data = readFileSync('/home/ian/ports/ports.txt')
        res.write(data)
        res.end()
        return;
    }

    res.writeHead(200);
    res.write(readFileSync('./static/index.html', 'utf8'));
    res.end();
}
