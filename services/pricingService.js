const { prisma } = require('../config/prisma');

const createPricing = async (pricing) => {
  try {
    const pricingData = await prisma.pricing.create({
      data: {
        origin      :pricing.origin,
        destination :pricing.destination,
        weight      :pricing.weight,
      }
    })
    return pricingData;
  } catch (error) {
    return error
  } 
}

const getPricing = async () => {
  // const connection = await pool.getConnection();
  try {
    const pricing = prisma.pricing.findMany()
    return pricing 
  } catch (error) {
    console.error(error)
    return error
  } 
}

module.exports = { 
  createPricing,
  getPricing
};
