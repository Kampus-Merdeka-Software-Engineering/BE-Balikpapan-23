const { pricingService } = require('../services')

const createPricing = async (req, res) => {
    const pricingDetails = req.body;

    const createdPricing = await pricingService.createPricing(pricingDetails)
    res.status(201).json({
        message: "Successful adding data",
        data: createdPricing
    });
}

const getPricing = async (req, res) => {
const pricing = await pricingService.getPricing();

res.status(200).json ({
    message: "Successful in retrieving data",
    data: pricing
})
}

module.exports = { 
    createPricing,
    getPricing 
};