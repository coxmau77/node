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
  response.json([
    {
      title: 'Título del producto #1',
      description: 'Breve descripción del producto',
      sku: 'ARG2024',
      price: 2499.99,
      stock: 48,
      onsale: false,
      date: '2024-08-01',
      category: 'Categoría_3',
    },
    {
      title: 'Título del producto #2',
      description: 'Breve descripción del producto',
      sku: 'BSAS2024',
      price: 3499.99,
      stock: 64,
      onsale: true,
      date: '2024-08-01',
      category: 'Categoría_5',
    },
  ]);
});

app.get('/products/:id', (request, response) => {
  const { id } = request.params;

  response.json({
    id,
    description: 'Devuelve un producto por ID',
  });
});

app.get('/categories/:categoryId/products/:productId', (request, response) => {
  const { categoryId, productId } = request.params;
  response.json({
    categoryId,
    productId,
    description: 'Devuelve un producto por varios parametros',
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en >>> http://localhost:${PORT}`);
});
