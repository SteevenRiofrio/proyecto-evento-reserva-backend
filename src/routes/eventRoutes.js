const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { validateCreateEvent } = require('../middlewares/eventValidation');

router.get('/', eventController.getAllEvents);
router.get('/:id', eventController.getEventById);
router.post('/', validateCreateEvent, eventController.createEvent);
router.put('/:id', validateCreateEvent, eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);

module.exports = router;