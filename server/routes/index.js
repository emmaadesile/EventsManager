import express from 'express';
import EventsController from '../controllers/eventsController';
import CentersController from '../controllers/centersController';

const router = express.Router();

//Events router
router.get('/api/events', EventsController.getAllEvents);
router.get('/api/events/:eventId', EventsController.getEvent);
router.post('/api/events', EventsController.createEvent);
router.put('/api/event/:eventId', EventsController.updateEvent);
router.delete('/api/events/:eventId', EventsController.deleteEvent);

//Center router
router.get('/api/centers', CentersController.getAllCenters);
router.get('/api/centers/:centerId', CentersController.getCenter);
router.post('/api/centers', CentersController.createCenter);
router.put('/api/centers/:centerId', CentersController.updateCenter);
router.delete('/api/centers/:centerId', CentersController.deleteCenter);

export default router;