const shipperModel = require('../models/Shipper');

//@desc Get current shipper details
//@route GET /api/shipper/me
//@access Private
const getCurrentShipper = async (req, res) => {
    try {
        const user = req.user;
        const shipperDetails = await shipperModel.getShipperDetails(user.Id);
        if (!shipperDetails) {
            return res.status(404).json({
                success: false,
                message: 'Shipper not found'
            });
        }
        res.status(200).json({
            success: true,
            data : {
                user: user,
                shipperDetails: shipperDetails
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

//@desc Update shipper details
//@route PUT /api/shipper/me
//@access Private
const updateCurrentShipper = async (req, res) => {
    try {
        const user = req.user;
        const details = req.body;
        await shipperModel.updateShipperDetails(user.Id, details);
        res.status(200).json({
            success: true,
            message: 'Shipper details updated successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

module.exports = {
    getCurrentShipper,
    updateCurrentShipper
};