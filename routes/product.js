const express = require('express');
const {
  addProducts,
  getProducts,
  getOneProduct,
  editProducts,
  deleteProducts,
} = require('../controllers/product.controller');

const router = express.Router();
router.post('/add_products', addProducts);
router.get('/get_products', getProducts);
router.get('/get_products/:_id', getOneProduct);
router.put('/edit_products/:_id', editProducts);
router.delete('/delete_products/:_id', deleteProducts);
module.exports = router;
