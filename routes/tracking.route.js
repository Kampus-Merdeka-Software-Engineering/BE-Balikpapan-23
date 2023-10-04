const express = require('express');
const trackingController = require('../controllers/tracking.controller')

const trackingRoute = express.Router();

trackingRoute.get('/', trackingController.getTracking);

module.exports = { trackingRoute };