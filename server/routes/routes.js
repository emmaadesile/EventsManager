import express from 'express';
import * as centers  from '../controllers/centersController';
import * as events  from '../controllers/eventsController';

const routes = express.Router();

//Events routes
routes.get('/events', (req, res) => events.getAllEvents);
routes.post('/event', (req, res) =>  events.createEvent);

routes.get('/events/eventId', (req, res) => events.getEvent);
routes.put('/events/eventId', (req, res) => events.updateEvent);
routes.delete('/events/eventId', (req, res) => events.deleteEvent);


export default routes;