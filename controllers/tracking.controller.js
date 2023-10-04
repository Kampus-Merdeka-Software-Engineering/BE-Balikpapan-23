const trackingService = require('../services/tracking.service')

const getTracking = async (req, res) => {
const tracking = await trackingService.getTracking()
res.status(200).json ({
    message: "Successful in retrieving data",
    data: tracking
})
}

module.exports = { getTracking };