import express from 'express';
import bodyParser from 'body-parser';

const app = express();


app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Server is up and running')
})

app.listen(9000, () => {
  console.log('app started')
});