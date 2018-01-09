import http from 'http';
import app from './app';
import dotenv from 'dotenv';


const port = parseInt(process.env.PORT, 10) || 5000;
app.set('port', port);
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`The server running on localhost:${port}`);
});


