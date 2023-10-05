const { messageService } = require('../services');

async function createMessage(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;

  const createdMessage = await messageService.createMessage(name, email, subject, message);

  res.status(200).json(price);
}

module.exports = {
  createMessage
};