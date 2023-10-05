const { prisma } = require('../config/prisma');

async function getPrice(origin, destination, weight) {
  try {
    const basePrice = await prisma.tarif.findFirst({
        where: {
            AND: [
                { origin: origin },
                { destination: destination },
            ]
        }
    })

    const finalPrice = basePrice.price * weight

    return {
        price: finalPrice
    };


  } catch (error) {
    console.error(error);

    throw new Error()
  }
}

module.exports = {
  getPrice
};