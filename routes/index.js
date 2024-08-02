const productsRouter = require('./products.route');
const categoriesRouter = require('./categories.route');
const usersRouter = require('./users.route');

function routerApi(app) {
  app.use('/api/products', productsRouter);
  app.use('/api/categories', categoriesRouter);
  app.use('/api/users', usersRouter);
}

module.exports = routerApi;
