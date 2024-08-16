const fs = require('fs');

function cleanFilePromisified(resolve) {
    fs.readFile('a.txt', 'utf-8', (err, content) => {
        if(!err) {
            const trimmedContent = content.trim();
            fs.writeFile('b.txt', trimmedContent, (err) => {
                if(!err) {
                    console.log('Wrote the trimmed content of a.txt to b.txt');
                    resolve();
                }
            });
        }
    });
}

function cleanFile () {
    return new Promise(cleanFilePromisified);
}
const p = cleanFile();
p.then(() => {
    console.log('promise resolved!');
})