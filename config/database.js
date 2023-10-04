const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    // host: process.env.DB_HOST || "localhost",
    // user: process.env.DB_USER || "root",
    // password: process.env.DB_PASS || "admin123",
    // database: process.env.DB_NAME || "swift-express"

    //DB_URI=
    uri: process.env.DB_URI
})

    module.exports = { pool }