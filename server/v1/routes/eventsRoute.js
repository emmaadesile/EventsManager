import eventsController from '../controllers/eventsController';

module.exports = (app) => {
  app.get('/api/events', eventsController.getAllEvents);
  app.get('/api/events/:eventId', eventsController.getEvent);
  app.post('/api/events', eventsController.createEvent);
  app.put('/api/events/:eventId', eventsController.updateEvent);
  app.delete('/api/events/:eventId', eventsController.deleteEvent);
};
