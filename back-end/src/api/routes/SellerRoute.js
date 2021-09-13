const express = require('express');
const { getAllOrders, getOrderById } = require('../controllers/SellerController');
const { jwtValidate } = require('../middlewares/jwtValidation');

const router = express.Router();

router.get('/orders/:email', jwtValidate, getAllOrders);
router.get('/orders/details/:id', jwtValidate, getOrderById);

module.exports = router;
