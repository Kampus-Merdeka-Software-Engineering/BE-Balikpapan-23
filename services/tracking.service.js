const { pool } = require('../config/database');

const getTracking = async () => {
  const connection = await pool.getConnection();

  const [tracking] = await connection.query("SELECT * FROM tracking");
  return tracking
}

module.exports = { getTracking }
