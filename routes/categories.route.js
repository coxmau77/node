const router = require('express').Router();

router.get(
  '/categories/:categoryId/products/:productId',
  (request, response) => {
    const { categoryId, productId } = request.params;
    response.json({
      categoryId,
      productId,
      description: 'Devuelve un producto por varios parametros',
    });
  },
);

module.exports = router;
