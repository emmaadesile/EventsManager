import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

const expect = chai.expect;

chai.use(chaiHttp);

describe('Test for Events API Endpoints', () => {
  
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

  // Get a single event
  it('should list a SINGLE event on /api/events/:eventId GET', () =>{
    return chai.request(app)
      .get('/events/:eventId')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
      });
  });

  // create an event
  it('should create a SINGLE event on /api/events POST', () => {
    return chai.request(app)
      .post('/events')
      .send({
        name: 'Party', 
        center: 'Boldview', 
        date: '12/12/2018',
        description: 'Party',
        facilites: 'Media Coverage'
      })
      .then((res) => {
        expect(res).to.have.status(201);
        expect(res).to.be.an('object');
        expect(res).to.be.json;
        expect(res.body.message).to.be.an('object').that.includes('Event created successfully');
      })
      .catch((err) => {
        expect(err).to.have.status(404);
      });
  });

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

