var _eventsController = require('../controllers/eventsController');

var _eventsController2 = _interopRequireDefault(_eventsController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

module.exports = function (app) {
  app.get('/api/events', _eventsController2['default'].getAllEvents);
  app.get('/api/events/:eventId', _eventsController2['default'].getEvent);
  app.post('/api/events', _eventsController2['default'].createEvent);
  app.put('/api/events/:eventId', _eventsController2['default'].updateEvent);
  app['delete']('/api/events/:eventId', _eventsController2['default'].deleteEvent);
};