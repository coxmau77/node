const express = require('express');
const app = express();
const PORT = 3000;

// Definir una ruta
app.get('/', (request, response) => {
  response.send('Ruta principal del servidor');
});
app.get('/new', (request, response) => {
  response.send('Nueva ruto o endpoint');
});
app.get('/products', (request, response) => {
  response.json({
    title: 'Título del producto',
    description: 'Breve descripción del producto',
    sku: 'ARG2024',
    price: 2499.99,
    stock: 48,
    onsale: true,
    date: '2024-08-01',
    category: 'Categoría_3',
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en >>> http://localhost:${PORT}`);
});
