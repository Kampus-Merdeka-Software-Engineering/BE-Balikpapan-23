const { regionService } = require('../services');

async function getRegion(req, res)  {
  const region = await regionService.getAllRegion();

  res.status(200).json(region);
}

module.exports = {
  getRegion,
};
