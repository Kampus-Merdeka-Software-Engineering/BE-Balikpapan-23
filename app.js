require('dotenv').config(); 
const express = require('express');
const cors = require('cors');

const routes = require('./routes');

// const { trackingRoute } = require('./routes/tracking.route');
// const { pricingRoute } = require('./routes/pricing.route');

const app = express();

const PORT = process.env.PORT || 4000;

const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log(`Method:${req.method} ${req.path}`);
});

routes.forEach((route) => app.use(route));

// app.use("/tracking", trackingRoute);
// app.use("/pricing", pricingRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});