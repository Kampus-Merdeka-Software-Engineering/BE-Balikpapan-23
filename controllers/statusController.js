const { statusService } = require('../services');

async function getStatus(req, res)  {
  const status = await statusService.getAllStatus();

  res.status(200).json(status);
}

module.exports = {
  getStatus,
};
