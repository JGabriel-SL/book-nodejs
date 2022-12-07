const fs = require('fs');

const leituraSync = file => {
    console.log('Realizando a leitura síncrona');
    const inicio = new Date().getTime();
    fs.readFileSync(file);
    const fim = new Date().getTime();
    console.log(`Bloqueio síncrono: ${fim - inicio}ms`);
};

module.exports = leituraSync;