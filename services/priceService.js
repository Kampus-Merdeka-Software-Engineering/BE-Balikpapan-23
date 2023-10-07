const { prisma } = require('../config/prisma');

async function getPrice(asal, tujuan, weight) {
  try {
    const basePrice = await prisma.tarif.findFirst({
        where: {
            AND: [
                { origin: asal },
                { destination: tujuan },
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