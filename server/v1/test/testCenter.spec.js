import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import fixture from './fixtures/centers-fixture';
const expect = chai.expect;

chai.use(chaiHttp);

describe('Test for Centers API Endpoints', () => {
  
  // Get all centers
  it('should list ALL centers on /api/centers GET', () => {
    return chai.request(app)
      .get('/centers')
      .then((res) =>{
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
      });
  });

  // Get a single center
  it('should list a SINGLE center on /api/centers/:eventId GET', () => {
    return chai.request(app)
      .get('/events/:eventId')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
      });
  });

  // create an center
  it('should create a SINGLE center on /api/centers POST', () => {
    chai.request(app)
      .post('/centers')
      .send(fixture.validCenter)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res).to.be.an('object');
        expect(res).to.be.json;
        expect(res.body.message).to.be.an('object').that.includes('Center created successfully');
      });
  });

  // update a single center
  it('should update a SINGLE center on /api/centers/:centerId PUT', () => {
    return chai.request(app)
      .put('/centers/centerId')
      .then((res) => {
        expect(res).to.have.status(201);
        expect(res).to.be.an('object');
        expect(res).to.be.json;
        expect(res.body.message).to.be.an('object').that.includes('Center updated successfully');
      })
      .catch((err) => {
        expect(err).to.have.status(404);
      });
  });

  // delete event
  it('should delete an SINGLE event on /api/centers/:centerId DELETE', () => {
    return chai.request(app)
      .delete('/centers/centerId')
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

