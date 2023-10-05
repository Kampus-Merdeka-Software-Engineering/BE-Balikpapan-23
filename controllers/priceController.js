const { priceService } = require('../services');

async function getPrice(req, res)  {
  const origin = req.query.origin;
  const destination = req.query.destination;
  const weight = req.query.weight;

  const price = await priceService.getPrice(origin, destination, weight);

  res.status(200).json(price);
}

module.exports = {
  getPrice
};