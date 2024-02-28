const productsRouter = require("./products");

const route = (app) => {
  app.use("/api/v1/products", productsRouter);
};

module.exports = route;
