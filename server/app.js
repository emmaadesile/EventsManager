import express from 'express';
import bodyParser from 'body-parser';

const app = express();


app.use(bodyParser.json());


app.use(require('./controllers'));

app.listen(9000, () => {
  console.log('app started')
});