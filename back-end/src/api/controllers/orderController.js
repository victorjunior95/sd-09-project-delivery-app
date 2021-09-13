const rescue = require('express-rescue');
const { newOrder,
   populateSaleProd, 
   findOrderById, 
   findSellerById, 
   changeStatusDelivery } = require('../service/orderServices');

const insertOrderInSale = rescue(async (req, res) => {
  const { userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status, products } = req.body;

  const insertNewOrder = await newOrder({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status,
  });

  await populateSaleProd(insertNewOrder.id, products);

  const findById = await findOrderById(insertNewOrder.id);

  // console.log('req.body', req.body);
  console.log('findById', findById.dataValues);
  res.status(201).json(findById.dataValues);
});

const getOrderDetails = rescue(async (req, res) => {
  const products = await findOrderById(req.params.id);
  res.status(200).json(products);
});

const getSellerById = rescue(async (req, res) => {
  const seller = await findSellerById(req.params.id);
  res.status(200).json(seller);
});

const changeStatus = rescue(async (req, res) => {
  const newStatus = await changeStatusDelivery(req.params.id);
  res.status(200).json(newStatus);
});

module.exports = { insertOrderInSale, getOrderDetails, getSellerById, changeStatus };
