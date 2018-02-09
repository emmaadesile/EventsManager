Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _eventsRoute = require('./eventsRoute');

var _eventsRoute2 = _interopRequireDefault(_eventsRoute);

var _centersRoute = require('./centersRoute');

var _centersRoute2 = _interopRequireDefault(_centersRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var app = _express2['default'].Router();
(0, _eventsRoute2['default'])(app);
(0, _centersRoute2['default'])(app);

exports['default'] = app;