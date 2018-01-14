import express from 'express';
import EventsController  from '../controllers/eventsController';
import CentersController  from '../controllers/centersController';

const router = express.Router();

//Events router
router.get('/events', EventsController.getAllEvents);
router.get('/events/:eventId', EventsController.getEvent);
router.post('/events', EventsController.createEvent);
router.put('/event/:eventId', EventsController.updateEvent);
router.delete('/events/:eventId', EventsController.deleteEvent);

export default router;