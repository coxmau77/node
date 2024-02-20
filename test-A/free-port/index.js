const http = require("node:http");
const { findAvalilablePort } = require("./find-port");

const server = http.createServer((request, response) => {
  console.log("Mensaje por consola en backend!");

  response.end("El server recibio la peticion (request)");
});

findAvalilablePort(2000).then((port) => {
  server.listen((port), () => {
    console.log(`Server on http://localhost:${port}`);
  });
});
