const Shoes = require("../models/product");
class ProductController {
  // Add your methods here
  async getAllProducts(_req, _res) {
    // Logic to retrieve all products data
    try {
      const products = await Shoes.find();
      _res.status(200).json(products);
    } catch (err) {
      _res.status(500).json({ message: err.message });
    }
  }

  async getProductById(_req, _res) {
    try {
      const id = _req.params.id;
      const shoes = await Shoes.findOne();
      const shoesDetail = shoes
        .toJSON()
        .shoes.find((shoes) => shoes.id === +id);
      if (!shoesDetail) {
        return _res.status(404).json({ message: "Product not found" });
      }
      return _res.status(200).json(shoesDetail);
    } catch (err) {
      _res.status(500).json({ message: err.message });
    }
  }

  async createNewProduct(_req, _res) {
    try {
      const shoes = await Shoes.findOne();
      const newProduct = _req.body;
      if (
        !newProduct.name ||
        !newProduct.image ||
        !newProduct.color ||
        !newProduct.price ||
        !newProduct.description
      ) {
        return _res.status(400).json({ message: "Invalid request" });
      }
      newProduct.id = shoes.toJSON().shoes.length + 1;
      //   Logic to create a new product
      await Shoes.updateOne(
        { _id: shoes._id },
        { $addToSet: { shoes: newProduct } }
      );
      _res.status(201).json({ message: "Create new product successfully" });
    } catch (err) {
      _res.status(500).json({ message: err.message });
    }
  }

  async updateAllProductsById(_req, _res) {
    try {
      const id = _req.params.id;
      const updatedProduct = _req.body;
      if (
        id === undefined ||
        isNaN(+id) ||
        !updatedProduct.name ||
        !updatedProduct.image ||
        !updatedProduct.color ||
        !updatedProduct.price ||
        !updatedProduct.description
      ) {
        return _res.status(400).json({ message: "Invalid request" });
      }
      //   Logic to update a product by id
      const shoes = await Shoes.findOne();
      const newShoes = shoes.toJSON().shoes;
      const index = shoes.toJSON().shoes.findIndex((shoes) => shoes.id === +id);
      if (index === -1) {
        return _res.status(404).json({ message: "Product not found" });
      }

      //   Update shoes
      newShoes[index] = updatedProduct;
      newShoes[index].id = id;

      await Shoes.findOneAndUpdate(
        { _id: shoes._id },
        { $set: { shoes: newShoes }, new: true }
      );
      _res.status(200).json({ message: "Update product successfully" });
    } catch (err) {
      _res.status(500).json({ message: err.message });
    }
  }

  async deleteProductById(_req, _res) {
    try {
      const id = _req.params.id;
      if (id === undefined || isNaN(+id)) {
        return _res.status(400).json({ message: "Invalid request" });
      }
      //   Logic to delete a product by id
      const shoes = await Shoes.findOne();
      const newShoes = shoes.toJSON().shoes;
      const index = shoes.toJSON().shoes.findIndex((shoes) => shoes.id === +id);
      if (index === -1) {
        return _res.status(404).json({ message: "Product not found" });
      }

      //delete item from shoes
      newShoes.splice(index, 1);
      await Shoes.findOneAndUpdate(
        { _id: shoes._id },
        { $set: { shoes: newShoes }, new: true }
      );
      _res.status(200).json({ message: "Delete product successfully" });
    } catch (err) {
      _res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new ProductController();
