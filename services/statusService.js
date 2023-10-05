const { prisma } = require('../config/prisma');

async function getAllStatus() {
  try {
    const status = await prisma.book.findMany();

    return status;
  } catch (error) {
    console.error(error);

    throw new Error()
  }
}

async function getStatus(noResi) {
  try {
    const status = await prisma.tracking.findFirst({
      where: {
          no_resi: noResi
      }
  })
   
    return status;
  } catch (error) {
    console.error(error);

    throw new Error()
  }
}

module.exports = {
  getStatus
};