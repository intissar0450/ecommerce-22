const Product = require('../models/Product')




//get all the products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ date: -1 });
    res.send(products);
  } catch (error) {
    res.status(500).json({errors.error.message})
  }
};
