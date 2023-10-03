const express = require('express');
const { statusController } = require('../controllers');
const router = express.Router();

// get all books
router.get('/status', statusController.getStatus);



module.exports = router;