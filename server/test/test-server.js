import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

const should = chai.should();

chai.use(chaiHttp);

describe('Test for API Endpoints', () => {
  it('should list ALL events on /api/events GET', () => {
    chai.request(app)
      .get('/events')
      .end((err, res) => {
        res.should.have.status(200);
        res.shoud.be.json;
        done();
      });
  });

  it('should list a SINGLE event on /api/events/:eventId GET', () =>{
    chai.request(app)
      .get('/events/:eventId')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        done();
      });
  });

  it('should create a SINGLE event on /api/events/ POST', () => {
    chai.request(app)
      .post('/events')
      .send({
        name: 'Party', 
        center: 'Boldview', 
        description: 'Party',
        facilites: 'Sound',
        date: '12/12/2018'
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.should.have.property('events');
        res.body.message.should.be.a('object');
        res.body.message.should.have.property('Event created successfully');
        // res.body.should.have.property('err').to.include('Please fill in all required fields')
      });
  });

  it('should update a SINGLE event on /api/events/:eventId PUT', () => {
    chai.request(app)
      .put('/events/:eventId')
      .send()
  });
  it('should delete an SINGLE event on /api/eventS/:eventId DELETE');
});

