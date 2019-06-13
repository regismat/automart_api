const orderRouter = require('express').Router();
const OrderCtrl = require('./order.controller');

orderRouter.post('/', OrderCtrl.createOrder);
orderRouter.patch('/:id/price', OrderCtrl.updateOrder);

module.exports =  orderRouter;