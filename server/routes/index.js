import express from 'express';
import eventsRoute from './eventsRoute';
import centersRoute from './centersRoute';

const app = express.Router();
eventsRoute(app);
centersRoute(app);

export default app;
