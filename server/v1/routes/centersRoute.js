import centersController from '../controllers/centersController';

// Centers route
module.exports = (app) => {
  app.get('/api/centers', centersController.getAllCenters);
  app.get('/api/centers/:centerId', centersController.getCenter);
  app.post('/api/centers', centersController.createCenter);
  app.put('/api/centers/:centerId', centersController.updateCenter);
  app.delete('/api/centers/:centerId', centersController.deleteCenter);
};
