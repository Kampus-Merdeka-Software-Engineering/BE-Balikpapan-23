const { trackingService } = require('../services');

const getReceiptById = async (req, res) => {
    const { id_receipt } = req.params;
    try {
        const receipt = await receiptService.getReceiptById(id_receipt);
        if (!receipt) {
            return res.status(404).json({ error: "Data not found"});
        } 
        res.status(200).json ({
            message: "Successful in retrieving data",
            data: receipt
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server error"});
    }
}

module.exports = { 
    getReceiptById 
};