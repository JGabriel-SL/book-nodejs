const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile(__dirname + '/index.html', (err, html) => {
        res.writeHead(200, {"Content-type" : "text/html"});
        res.write(html);
        res.end();
    });
    console.log(req.url)
});

server.listen(3000, () => {
    console.log('O servidor está funcionando corretamente!');
});