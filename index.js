const data = fs.readFileSync(`${_dirname}/dev-data/data.json`, `utf-8`);
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    const pathName = req.url;

    switch (pathName) {
        case '/':
            res.end('This is Overview')
            break;
        case '/product':
            res.end('This is Product')
            break;
        case '/api':
            res.writeHead(200, { 'Content-type': 'application/json' });
            res.end(data);
            break;
        default:
            res.writeHead(404, {
                'Content-type': 'text/html'
            })
    }
}))