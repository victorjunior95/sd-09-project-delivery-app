const express = require('express');
const bodyParser = require('body-parser').json();
const path = require('path');
const http = require('http');
const cors = require('cors');
const router = require('./router/router');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(bodyParser);
const httpServer = http.createServer(app);

// const options = {
//   origin: 'http://localhost:3000',
// };
app.use(cors());

const io = require('socket.io')(httpServer, {
  cors: {
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }});

  io.on('connection', (socket) => {
    console.log(`Usuário conectado. ID: ${socket.id} `);
  });
  

app.use('/images', express.static(path.join(__dirname, '..', '..', 'public')));
app.get('/coffee', (_req, res) => res.status(418).end());

app.use(router);

app.use(errorHandler);

// module.exports = app;
module.exports = httpServer;
