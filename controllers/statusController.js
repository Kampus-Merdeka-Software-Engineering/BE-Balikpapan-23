const { statusService } = require('../services');

async function getStatus(req, res)  {
  const noResi = req.params.noResi
  const status = await statusService.getStatus(noResi);

  res.status(200).json(status);
}

module.exports = {
  getStatus,
};
