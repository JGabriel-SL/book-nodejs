const e = require('express');
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/html"});
    if (req.url == '/') {
        res.write("<h1>Home Page</h1>");
    } else if (req.url == '/welcome') {
        res.write("<h1>Welcome Page</h1>");
    } else {
        res.write("<h1>Page not found</h1>");
    }
    res.end();
})
server.listen(3000, () => {
    console.log('O servidor foi iniciado na porta 3000');
});