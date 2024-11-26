const http = require('http');

http.createServer(function (req, res) {
    res.write('Hello world'); // Corregido: Cambiado de req.write a res.write
    res.end();
}).listen(3000);

console.log("Servidor escuchando el puerto 3000");
