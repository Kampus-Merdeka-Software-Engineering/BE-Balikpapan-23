const express = require('express');
const { priceController } = require('../controllers');
const router = express.Router();

// get price
router.get('/price', priceController.getPrice);


module.exports = router;