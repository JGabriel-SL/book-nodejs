const http = require('http');
const fs = require('fs');
const leituraAsync = require('./leitura_async');
const leituraSync = require('./leitura_sync');
const file = './gatinho.jpg';
const stream = fs.createWriteStream(file);
const download = "http://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gato.jpg";

http.get(download, (res) => {
    console.log('Fazendo download!');
    res.on('data', (data) => {
        stream.write(data);
    });
    res.on('end', () => {
        stream.end();
        console.log('Downloado finalizado!');
        leituraAsync(file);
        leituraSync(file);
    });
});