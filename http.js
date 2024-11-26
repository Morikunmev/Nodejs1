const http = require('http');

const server = http.createServer(function (req, res) {
    console.log(req.url); // Corregido: Cambiado de request.url a req.url

    if (req.url === '/') { // Corregido: Cambiado de request.url a req.url
        res.write('Bienvenido'); // Corregido: Cambiado de response.write a res.write
        return res.end(); 
    }

    if (req.url === '/about') { // Corregido: Cambiado de request.url a req.url
        res.write('Acerca de'); // Corregido: Cambiado de response.write a res.write
        return res.end(); // Corregido: Cambiado de response.end a res.end
    }

    res.write(`
        <h1>Not Found</h1>
        <p>esta pagina no se encontro</p>
        <a href="/">volver a la pagina principal</a>`); 
    res.end(); 
})


server.listen(3000);



console.log("Servidor escuchando el puerto 3000");
