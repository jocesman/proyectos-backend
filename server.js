const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('¡Bienvenido al backend12345!');
});

server.listen(8000, () => {
    console.log('Servidor corriendo en http://localhost:8000');
});
