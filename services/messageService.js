async function createMessage(message) {
    try {
      const mappedMessage = {
        data: {
          full_name: message.full_name,
          email: message.email,
          subject: message.subject,
          message: message.message
        }
      };
  
      const createdMessage = await prisma.message.create(mappedMessage);
  
      return createdMessage
    } catch (error) {
      console.error(error);
  
      throw new Error()
    }
  }
module.exports = {
  createMessage
};