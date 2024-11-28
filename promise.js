const {readFile} = require('fs');
const path = require('path');

const getText = (pathFile) =>{
    return new Promise((resolve, reject) => {
        readFile(pathFile, 'utf-8', (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

getText("./data/firts.txt").then((result)=> console.log(result)).then(()=> getText("./data/second.txt")).then(result => console.log(result)).catch(error=> console.log(error))