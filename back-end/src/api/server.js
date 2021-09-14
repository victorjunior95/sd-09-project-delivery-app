require('dotenv').config();
const express = require('express');

const port = process.env.API_PORT || 3001;

const http = require('http');

const app = express();

const httpServer = http.createServer(app);

const io = require('socket.io')(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    method: ['GET', 'POST', 'PUT', 'DELETE'],
  },
});


const orderStatus = require('./socket/orderStatusSocket');

orderStatus(io);

httpServer.listen(port);
console.log(`Api rodando na porta ${port}`);