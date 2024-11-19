const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('¡Hola, mundo desde el backend!');
});

server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});