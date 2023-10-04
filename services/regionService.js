const { prisma } = require('../config/prisma');

async function getAllRegion() {
  try {
    const region = await prisma.region.findMany();

    return region;
  } catch (error) {
    console.error(error);

    throw new Error()
  }
}

module.exports = {
  getAllRegion
};