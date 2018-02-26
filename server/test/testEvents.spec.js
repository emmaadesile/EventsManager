import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import fixture from './fixtures/events-fixture';
const expect = chai.expect;

chai.use(chaiHttp);

describe('Test for Events API Endpoints', () => {
  // ============================================================
  // Get all events
  it('should list ALL events on /api/events GET', () => {
    return chai.request(app)
      .get('/events')
      .then((res) =>{
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
      });
  });

  // ============================================================
  // Get a single event
  it('should list a SINGLE event on /api/events/:eventId GET', () => {
    return chai.request(app)
      .get('/events/:eventId')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
      });
  });


  // =============================================================
  // CREATE EVENT
  // create an event successfully
  it('should create a SINGLE event on /api/events POST', () => {
    chai.request(app)
      .post('/events')
      .send(fixture.validEvent)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.be.an('object').that.includes('Event created successfully');
      });
  });

  // it shouldn't create an event without a name
  it('should not create an event without a name on api/events POST', () => {
    chai.request(app)
      .post('/events')
      .send(fixture.invalidEventName)
      .end((err, res) => {
        expect(res).to.be.json;
        expect(res).to.have.status(400);
        expect(res).to.have.property('message').that.includes('Please fill in all the fields');
      });
  })

  // =================================================================

  // update a single event
  it('should update a SINGLE event on /api/events/:eventId PUT', () => {
    return chai.request(app)
      .put('/events/eventId')
      .then((res) => {
        expect(res).to.have.status(201);
        expect(res).to.be.an('object');
        expect(res).to.be.json;
        expect(res.body.message).to.be.an('object').that.includes('Event updated successfully');
      })
      .catch((err) => {
        expect(err).to.have.status(404);
      });
  });

  // delete event
  it('should delete an SINGLE event on /api/events/:eventId DELETE', () => {
    return chai.request(app)
      .delete('/events/eventId')
      .then((res) => {
        expect(res).to.have.status(202);
        expect(res).to.be.an('object');
        expect(res).to.be.json;
      })
      .catch((err) => {
        expect(err).to.have.status(404);
      });
  });

});

