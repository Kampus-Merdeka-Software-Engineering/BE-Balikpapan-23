require('dotenv').config(); 
const express = require('express');
const { pool } = require('./config/database');
const { trackingRoute } = require('./routes/tracking.route');
const { pricingRoute } = require('./routes/pricing.route');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/tracking", trackingRoute);
app.use("/pricing", pricingRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})