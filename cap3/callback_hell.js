const fs = require('fs');
fs.readdir(__dirname, (err, contents) => {
    if (err) { throw err; };
    contents.forEach((content) => {
        const path = './' + content;
        fs.stat(path, (err, stat) => {
            if (err) { throw err; };
            if (stat.isFile()) {
                console.log('%s %d bytes', content, stat.size);
            };
        });
    });
});