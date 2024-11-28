const { readFile } = require("fs/promises");
// const {promisify} = require("util");
// const path = require("path");

// const getText = (pathFile) => {
//   return new Promise((resolve, reject) => {
//     readFile(pathFile, "utf-8", (err, data) => {
//       if (err) reject(err);
//       resolve(data);
//     });
//   });
//  };

// getText("./data/firts.txt").then((result)=> console.log(result)).then(()=> getText("./data/second.txt")).then(result => console.log(result)).catch(error=> console.log(error))

// const readFilePromise = promisify(readFile);

async function read() {
  try {
    const result1 = await readFile("./data/firts.txt","utf-8");
    const result2 = await readFile("./data/second.txt","utf-8");
    const result3 = await readFile("./data/third.txt","utf-8");
    console.log(result1);
    console.log(result2);
    console.log(result3);
  } catch (error) {
    console.log(error);
  }
}
read();
