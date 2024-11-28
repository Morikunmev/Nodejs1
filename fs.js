const fs = require("fs");
// const first = fs.readFileSync('./data/firts.txt', 'utf-8');
// const second = fs.readFileSync('./data/second.txt');

// console.log(first)
// console.log(second.toString())

// const title = "adad ada dad"
// fs.writeFileSync('./data/third.txt', title,{
//     flag: 'a'
// })

console.log(fs)
console.log("--------------------------------")

fs.readFile("./data/firts.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data.toString());
  fs.readFile("./data/firts.txt", "utf-8", (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(data.toString());
    fs.writeFile(
      "./data/newfile.txt",
      "archivo creado desde fs",
      (error, data) => {
        console.log(error);
        console.log(data);
        fs.writeFile(
          "./data/newfile.txt",
          "archivo creado desde fs",
          (error, data) => {
            console.log(error);
            console.log(data);
          }
        );
      }
    );
  });
});
