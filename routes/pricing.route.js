const express = require('express')
const pricingController = require('../controllers/pricing.controller')

const pricingRoute = express.Router()

pricingRoute.post('/', pricingController.createPricing)
pricingRoute.get('/', pricingController.getPricing)

module.exports = { pricingRoute }