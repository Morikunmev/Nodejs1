const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("welcome al server");
    return res.end();
  }
  if (req.url === "/about") {
    for (let i = 0; i < 100000; i++) {
        console.log(Math.random() * i)
    }
    return res.end("about page");
  }
  res.end("not found");
});
server.listen(3001);
console.log("listening on port 3001");
