const router = require('express').Router();

router.get('/', (request, response) => {
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

module.exports = router;
