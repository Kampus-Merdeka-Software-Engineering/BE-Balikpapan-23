const { messageService } = require('../services');

async function createMessage(req, res) {
  const Message = req.body;

  const createdMessage = await messageService.createMessage(Message);

  res.status(200).json({
    message: `message has been sent`
  });
}

module.exports = {
  createMessage
};