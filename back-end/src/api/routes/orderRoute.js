const express = require('express');
const { insertOrderInSale,
    getOrderDetails,
    getSellerById,
    changeStatus,
    getAllTheOrders } = require('../controllers/orderController');
const { jwtValidate } = require('../middlewares/jwtValidation');

const router = express.Router();

router.put('/changestatus/:id', jwtValidate, changeStatus);
router.get('/:id', jwtValidate, getOrderDetails);
router.post('/', jwtValidate, insertOrderInSale);
router.get('/seller/:id', jwtValidate, getSellerById);
router.get('/allordersfrom/:id', jwtValidate, getAllTheOrders);

module.exports = router;
