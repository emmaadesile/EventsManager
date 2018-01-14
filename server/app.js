import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import http from 'http';
import router from './routes/index';

const app = express();
app.use(logger('dev'));

// Parse incoming http requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = parseInt(process.env.PORT, 10) || 5000;
app.set('port', port);
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`The server running on localhost:${port}`);
});

// app.use('routes', routes);
app.use(router);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the Events Manager API'
  }));

export default app;
