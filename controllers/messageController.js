const { messageService } = require('../services');

async function createMessage(req, res) {
  // const full_name = req.body.full_name;
  // const email = req.body.email;
  // const subject = req.body.subject;
  // const message = req.body.message;
  const Message = req.body;
  console.log (Message)

  const createdMessage = await messageService.createMessage(Message);

  res.status(200).json({
    message: `message has been sent`
  });
}

module.exports = {
  createMessage
};