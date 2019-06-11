const orderRouter = require('express').Router();
const OrderCtrl = require('./order.controller');

orderRouter.post('/', OrderCtrl.createOrder);
orderRouter.patch('/', OrderCtrl.updateOrder);

module.exports =  orderRouter;