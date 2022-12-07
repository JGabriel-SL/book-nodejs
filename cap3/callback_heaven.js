const fs = require('fs');
const readDir = () => {
    fs.readdir(__dirname, (err, dir) => { 
        if (err) { throw err; };
        dir.forEach(file => {
            read(file)
        });
    });
};
const read = (file) => {
    const path = './' + file;
    fs.stat(path, (err, stat) => {
        if (err) { throw err; };
        if (stat.isFile()) {
            console.log('%s %d bytes', file, stat.size);
        }
    })
};

readDir();