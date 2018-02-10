Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var app = (0, _express2['default'])();
app.use((0, _morgan2['default'])('dev'));

// Parse incoming http requests
app.use(_bodyParser2['default'].json());
app.use(_bodyParser2['default'].urlencoded({ extended: false }));

var port = parseInt(process.env.PORT, 10) || 6000;
app.set('port', port);
var server = _http2['default'].createServer(app);

server.listen(port, function () {
  console.log('The server running on localhost:' + String(port));
});

//use the router
app.use(_index2['default']);

//catch all route
app.get('*', function (req, res) {
  return res.status(200).send({
    message: 'Welcome to the Events Manager API'
  });
});

exports['default'] = app;