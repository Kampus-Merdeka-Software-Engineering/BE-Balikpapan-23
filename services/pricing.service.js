const { pool } = require('../config/database');
const { prisma } = require('../config/prisma');

const createPricing = async (pricing) => {
  try {
    const createdPricing = await connection.query('INSERT INTO pricing (origin, destination, weight) VALUES (?, ?, ?)',
    [pricing.origin, pricing.destination, pricing.weight]);
    return createdPricing;
  } catch (error) {
    return error
  } finally {
    connection.release()
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

module.exports = { getPricing, createPricing }
