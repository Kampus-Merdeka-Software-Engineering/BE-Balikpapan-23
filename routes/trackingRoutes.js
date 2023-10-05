const express = require('express');
const { trackingController } = require('../controllers');
const router = express.Router();

router.get('/tracking', trackingController.getReceiptById);

module.exports = { router };