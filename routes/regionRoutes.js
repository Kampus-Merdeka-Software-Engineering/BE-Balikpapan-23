const express = require('express');
const { regionController } = require('../controllers');
const router = express.Router();

// get all status
router.get('/region', regionController.getRegion);



module.exports = router;