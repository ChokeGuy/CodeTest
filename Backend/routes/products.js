const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
// GET /api/v1/products
router.get("/", productController.getAllProducts);

// GET /api/v1/products/:id
router.get("/:id", productController.getProductById);

// POST /api/v1/products
router.post("/", productController.createNewProduct);

// PUT /api/v1/products/:id
router.put("/:id", productController.updateAllProductsById);

// DELETE /api/v1/products/:id
router.delete("/:id", productController.deleteProductById);

module.exports = router;
