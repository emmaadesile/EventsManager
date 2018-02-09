var _centersController = require('../controllers/centersController');

var _centersController2 = _interopRequireDefault(_centersController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Centers route
module.exports = function (app) {
  app.get('/api/centers', _centersController2['default'].getAllCenters);
  app.get('/api/centers/:centerId', _centersController2['default'].getCenter);
  app.post('/api/centers', _centersController2['default'].createCenter);
  app.put('/api/centers/:centerId', _centersController2['default'].updateCenter);
  app['delete']('/api/centers/:centerId', _centersController2['default'].deleteCenter);
};