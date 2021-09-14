const { changeStatusDelivery } = require('../service/orderServices');

const orderStatus = (io) => {
  io.on('connection', (socket) => {
    console.log(`nova conexão ${socket.id}`);

    socket.on('changeStatusOrder', async (status, id) => {
      console.log(status, id);
      io.emit('changeStatusOrder', status, id);
      await changeStatusDelivery(id, status);
    });
  });
};

module.exports = orderStatus;