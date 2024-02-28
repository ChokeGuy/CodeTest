const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: Number,
  image: String,
  name: String,
  description: String,
  price: Number,
  color: String,
});

const shoesSchema = new mongoose.Schema({
  shoes: [productSchema],
});

module.exports = mongoose.model("Shoes", shoesSchema);
