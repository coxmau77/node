const router = require('express').Router();
const { faker } = require('@faker-js/faker');

router.get('/', (request, response) => {
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
      category: faker.helpers.arrayElement([
        'Electronics',
        'Furniture',
        'Clothing',
        'Books',
        'Toys',
      ]),
    });
  }
  response.json(products);
});

router.get('/filter', (request, response) => {
  // Los endoints que sean especificos deben estar antes de los que son dinamicos como por ejemplo /products/:id
  // response.json({});
  response.send('Esto es la ruta para filtrar');
});

router.get('/:id', (request, response) => {
  const { id } = request.params;

  response.json({
    id,
    description: 'Devuelve un producto por ID',
  });
});

module.exports = router;
