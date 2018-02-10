var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

var _eventsFixture = require('./fixtures/events-fixture');

var _eventsFixture2 = _interopRequireDefault(_eventsFixture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var expect = _chai2['default'].expect;

_chai2['default'].use(_chaiHttp2['default']);

describe('Test for Events API Endpoints', function () {
  // ============================================================
  // Get all events
  it('should list ALL events on /api/events GET', function () {
    return _chai2['default'].request(_app2['default']).get('/events').then(function (res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.an('object');
    });
  });

  // ============================================================
  // Get a single event
  it('should list a SINGLE event on /api/events/:eventId GET', function () {
    return _chai2['default'].request(_app2['default']).get('/events/:eventId').then(function (res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.an('object');
    });
  });

  // =============================================================
  // CREATE EVENT
  // create an event successfully
  it('should create a SINGLE event on /api/events POST', function () {
    _chai2['default'].request(_app2['default']).post('/events').send(_eventsFixture2['default'].validEvent).end(function (err, res) {
      expect(res).to.have.status(201);
      expect(res).to.be.json;
      expect(res.body).to.be.an('object');
      expect(res.body.message).to.be.an('object').that.includes('Event created successfully');
      // done();
    });
  });

  // it shouldn't create an event without a name
  it('should not create an event without a name on api/events POST', function () {
    _chai2['default'].request(_app2['default']).post('/events').send(_eventsFixture2['default'].invalidEventName).end(function (err, res) {
      expect(res).to.be.json;
      expect(res).to.have.status(400);
      expect(res).to.have.property('message').that.includes('Please fill in all the fields');
      // done();
    });
  });

  // =================================================================

  // update a single event
  it('should update a SINGLE event on /api/events/:eventId PUT', function () {
    return _chai2['default'].request(_app2['default']).put('/events/eventId').then(function (res) {
      expect(res).to.have.status(201);
      expect(res).to.be.an('object');
      expect(res).to.be.json;
      expect(res.body.message).to.be.an('object').that.includes('Event updated successfully');
    })['catch'](function (err) {
      expect(err).to.have.status(404);
    });
  });

  // delete event
  it('should delete an SINGLE event on /api/events/:eventId DELETE', function () {
    return _chai2['default'].request(_app2['default'])['delete']('/events/eventId').then(function (res) {
      expect(res).to.have.status(202);
      expect(res).to.be.an('object');
      expect(res).to.be.json;
    })['catch'](function (err) {
      expect(err).to.have.status(404);
    });
  });
});