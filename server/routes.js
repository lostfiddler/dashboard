import {readFileSync} from 'node:fs';

export default (props) => {
    const { request, res } = props;
    if(['.js', '.css', '.ttf', '.svg', '.png'].some(ext => request.url.includes(ext))) {
        res.writeHead(200, {
            "Content-Type": {
                '.js': 'text/javascript',
                '.css': 'text/css',
                '.ttf': 'font/ttf',
                '.svg': 'image/svg+xml',
                '.png': 'image/png'
            }[request.url.slice(request.url.lastIndexOf('.'))]
        });
        res.write(readFileSync('./frontEnd' + request.url));
        res.end();
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
    res.write(readFileSync('./frontEnd/index.html', 'utf8'));
    res.end();
}
