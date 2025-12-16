const express = require('express');
const router = express.Router();

const {
  getProducts,
  createProduct
} = require('../Controllers/controllers');

router.get('/products', getProducts);
router.post('/products', createProduct);

module.exports = router;