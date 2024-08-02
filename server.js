const express = require('express');
const { faker } = require('@faker-js/faker');

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
  const products = [];
  const { size } = request.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      id: faker.string.uuid(),
      price: parseFloat(faker.commerce.price({ min: 100, max: 200, dec: 2 })),
      material: faker.commerce.productMaterial(),
      image: faker.image.url({
        width: 640,
        height: 480,
        category: 'technics',
        randomize: true,
        https: true,
      }),
      onsale: faker.datatype.boolean(),
    });
  }
  response.json(products);
});

app.get('/products/filter', (request, response) => {
  // Los endoints que sean especificos deben estar antes de los que son dinamicos como por ejemplo /products/:id
  // response.json({});
  response.send('Esto es la ruta para filtrar');
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

app.get('/users', (request, response) => {
  const { limit, offset } = request.query;

  if (limit && offset) {
    response.json({
      limit,
      offset,
    });
  } else {
    response.send('No existen parámetros');
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en >>> http://localhost:${PORT}`);
});
