const { prisma } = require('../config/prisma');

//To get user by id_receipt
const getReceiptById = async(id_receipt) => {
  try {
    const tracking = await prisma.tracking.findUnique({
      where: {
        id: String(id_receipt)
      }
    });
    return tracking;
  } catch (error) {
    console.error(error)

    throw new Error()
  }
}

module.exports = { getReceiptById }
