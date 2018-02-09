var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

var _centersFixture = require('./fixtures/centers-fixture');

var _centersFixture2 = _interopRequireDefault(_centersFixture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var expect = _chai2['default'].expect;

_chai2['default'].use(_chaiHttp2['default']);

describe('Test for Centers API Endpoints', function () {

  // Get all centers
  it('should list ALL centers on /api/centers GET', function () {
    return _chai2['default'].request(_app2['default']).get('/centers').then(function (res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.an('object');
    });
  });

  // Get a single center
  it('should list a SINGLE center on /api/centers/:eventId GET', function () {
    return _chai2['default'].request(_app2['default']).get('/events/:eventId').then(function (res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.an('object');
    });
  });

  // create an center
  it('should create a SINGLE center on /api/centers POST', function () {
    _chai2['default'].request(_app2['default']).post('/centers').send(_centersFixture2['default'].validCenter).end(function (err, res) {
      expect(res).to.have.status(201);
      expect(res).to.be.an('object');
      expect(res).to.be.json;
      expect(res.body.message).to.be.an('object').that.includes('Center created successfully');
    });
  });

  // update a single center
  it('should update a SINGLE center on /api/centers/:centerId PUT', function () {
    return _chai2['default'].request(_app2['default']).put('/centers/eventId').then(function (res) {
      expect(res).to.have.status(201);
      expect(res).to.be.an('object');
      expect(res).to.be.json;
      expect(res.body.message).to.be.an('object').that.includes('Center updated successfully');
    })['catch'](function (err) {
      expect(err).to.have.status(404);
    });
  });

  // delete event
  it('should delete an SINGLE event on /api/centers/:centerId DELETE', function () {
    return _chai2['default'].request(_app2['default'])['delete']('/centers/centerId').then(function (res) {
      expect(res).to.have.status(202);
      expect(res).to.be.an('object');
      expect(res).to.be.json;
    })['catch'](function (err) {
      expect(err).to.have.status(404);
    });
  });
});