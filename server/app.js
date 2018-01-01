import express from 'express';
import bodyParser from 'body-parser';
import * as Centers  from './controllers/centersController';
import * as Events  from './controllers/eventsController';

const app = express();
// const events = new Events();
// const centers = new Centers();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.use(require('./centersController'));

app.listen(9000, () => console.log('server is running'));


