const express = require('express')
const { pricingController } = require('../controllers')
const router = express.Router();

router.post('/pricing', pricingController.createPricing);
router.get('/pricing', pricingController.getPricing);

module.exports = { router };