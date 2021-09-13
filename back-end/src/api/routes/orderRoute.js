const express = require('express');
const { insertOrderInSale,
    getOrderDetails,
    getSellerById,
    changeStatus } = require('../controllers/orderController');
const { jwtValidate } = require('../middlewares/jwtValidation');

const router = express.Router();

router.put('/changestatus/:id', jwtValidate, changeStatus);
router.get('/:id', jwtValidate, getOrderDetails);// NÂO ESQUECER DO JWT VALIDATE!
router.post('/', jwtValidate, insertOrderInSale);
router.get('/seller/:id', jwtValidate, getSellerById);

module.exports = router;
