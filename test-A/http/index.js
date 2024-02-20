// Servidor web node desde cero nativo
const http = require('node:http');

const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {

    console.log("Mensaje por consola en backend!")

    response.end('El server recibio la peticion (request)');
});

// server.listen(port, () => {
//     console.log(`Server on http://localhost:${port}`);
// });

server.listen(0, () => {
    console.log(`Server on http://localhost:${server.address().port}`);
});