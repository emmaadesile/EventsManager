import express from 'express';
import eventsController  from '../controllers/eventsController';
import centersController  from '../controllers/centersController';

const router = express.Router();

//Events router
router.get('/events', (req, res) => res.send(eventsController.getAllEvents));
router.post('/event', (req, res) => res.send(eventsController.createEvent));

router.get('/events/:eventId', (req, res) => res.send(eventsController.getEvent));
router.put('/events/:eventId', (req, res) => res.send(eventsController.updateEvent));
router.delete('/events/:eventId', (req, res) => res.send(eventsController.deleteEvent));

export default router;