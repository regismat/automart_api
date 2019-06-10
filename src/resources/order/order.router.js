const orderRouter = require('express').Router();
const OrderCtrl = require('./order.controller');

orderRouter.post('/', OrderCtrl.createOrder);

module.exports =  orderRouter;