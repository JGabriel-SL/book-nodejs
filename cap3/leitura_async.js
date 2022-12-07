const fs = require('fs');

const leituraAsync = file => {
    console.log('Realizando a leitura assíncrona');
    const inicio = new Date().getTime();
    fs.readFile(file);
    const fim = new Date().getTime();
    console.log(`Bloqueio assíncrono: ${fim - inicio}ms`);
};

module.exports = leituraAsync;