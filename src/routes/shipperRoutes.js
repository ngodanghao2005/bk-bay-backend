const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');

const {
    getCurrentShipper,
    updateCurrentShipper
} = require('../controllers/shipperController');

// All routes require authentication (shipper)
router.get('/me', verifyToken, getCurrentShipper);
router.put('/me', verifyToken, updateCurrentShipper);
module.exports = router;