const fs = require("node:fs").promises;

console.log("> 1º Read archivo.txt ...");

// IIFE - Inmediatly Invoked Function Expression
(async () => {
  fs.readFile("./archivo.txt", "utf-8")
    .then((archivoTxtRead) => {
      console.log("> 2º Contenido del archivo archivo.txt", archivoTxtRead);
    })
    .catch((error) => {
      console.error("Error al leer el archivo:", error);
    })
    .finally(() => {
      console.log("Limpieza de recursos... Siempre se ejecuta");
    });

  console.log("> 3º Mostrar este mje mientras se lee el archivo");

  console.log("> 4º Read text_document.txt ...");

  fs.readFile("./text_document.txt", "utf-8")
    .then((dataArchivoTxt) => {
      console.log(
        "> 5º Contenido del archivo text_document:: ",
        dataArchivoTxt
      );
    })
    .catch((error) => {
      console.error("Error al leer el archivo:", error);
    });
})();
