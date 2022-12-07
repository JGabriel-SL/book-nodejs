const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/html"});
    res.write('<h1>Hello world</h1>');
    const result = url.parse(req.url, true);
    console.log(result);
    for(key in result.query) {
        res.write(`<h2>${key} : ${result.query[key]}</h2>`);
    }
    res.end();
});

server.listen(3000, () => {
    console.log('Servidor iniciado!');
});