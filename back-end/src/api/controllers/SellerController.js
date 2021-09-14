const rescue = require('express-rescue');
const sellerServices = require('../service/SellerServices');
const orderServices = require('../service/orderServices');

const HTTP_STATUS_OK = 200;

const getAllOrders = rescue(async (req, res) => {
  const { email } = req.params;
  
  const orders = await sellerServices.getAll(email);

  return res.status(HTTP_STATUS_OK).json(orders);
});

const getOrderById = rescue(async (req, res) => {
  const { id } = req.params;

  const order = await orderServices.findOrderById(id);

  return res.status(HTTP_STATUS_OK).json(order);
});

module.exports = {
  getAllOrders,
  getOrderById,
};
