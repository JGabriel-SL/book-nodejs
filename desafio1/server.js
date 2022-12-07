const http = require('http');
const fs = require('fs');
const {URL} = require('url');

const server = http.createServer((req, res) => {
    if (req.url == '/artigos' || req.url == '/') {
        fs.readFile(__dirname + '/artigos.html', (err, html) => {
            res.writeHead(200, {"Content-type" : "text/html"});
            res.end(html);
        });
    } else if (req.url == '/contato') {
        fs.readFile(__dirname + '/contato.html', (err, html) => {
            res.writeHead(200, {"Content-type" : "text/html"});
            res.end(html);  
        });
    } else {
        fs.readFile(__dirname + '/error.html', (err, html) => {
            res.writeHead(200, {"Content-type" : "text/html"});
            res.end(html);
        });
    }
});

server.listen(3000, () => {
    console.log('O servidor foi iniciado com sucesso!');
});