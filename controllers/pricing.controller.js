const pricingService = require('../services/pricing.service')

const createPricing = async (req, res) => {
    const createdPricing = await pricingService.createPricing(req.body)
    res.status(201).json({
        message: "Successful adding data",
        data: createdPricing
    })
}

const getPricing = async (req, res) => {
const pricing = await pricingService.getPricing()
res.status(200).json ({
    message: "Successful in retrieving data",
    data: pricing
})
}

module.exports = { getPricing, createPricing };