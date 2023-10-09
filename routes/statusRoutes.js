const express = require('express');
const { statusController } = require('../controllers');
const router = express.Router();

// get status
router.get('/status/:noResi', statusController.getStatus);



module.exports = router;