const express = require('express');
const router = express.Router();
const eventRoutes = require('./eventRoutes');
const bookingRoutes = require('./bookingRoutes');

router.use('/events', eventRoutes);
router.use('/bookings', bookingRoutes);

module.exports = router;