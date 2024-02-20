const http = require("node:http");
const desiredPort = process.env.PORT ?? 3000;

const server = http.createServer((request, response) => {

  console.log("Mensaje por consola en backend! " + request.url);

  response.end("El server recibio la peticion (request)");
});

server.listen(desiredPort, () => {
  console.log(`Server on http://localhost:${desiredPort}`);
});
