const express = require('express');
const { messageController } = require('../controllers');
const router = express.Router();

router.post('/message', messageController.createMessage);


module.exports = router;