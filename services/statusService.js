const { prisma } = require('../config/prisma');

async function getAllStatus() {
  try {
    const status = await prisma.status.findMany();

    return status;
  } catch (error) {
    console.error(error);

    throw new Error()
  }
}

module.exports = {
  getAllStatus
};