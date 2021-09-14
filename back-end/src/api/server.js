require('dotenv').config();

const port = process.env.API_PORT || 3001;

const http = require('http');

const socket = require('socket.io');

const app = require('./app');

const httpServer = http.createServer(app);

const io = socket(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    method: ['GET', 'POST', 'PUT', 'DELETE'],
  },
});

const orderStatus = require('./socket/orderStatusSocket');

orderStatus(io);

httpServer.listen(port);
console.log(`Api rodando na porta ${port}`);