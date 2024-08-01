const express = require('express');
const app = express();
const PORT = 3000;

// Definir una ruta
app.get('/', (request, response) =>{
  response.send('Ruta principal del servidor');
});

// Iniciar servidor
app.listen(PORT, () =>{
  console.log(`Servidor corriendo en >>> http://localhost:${PORT}`);
});
