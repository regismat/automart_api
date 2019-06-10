const carRouter = require('express').Router();
const CarCtrl = require('./car.controller');

carRouter.post('/', CarCtrl.createCar);

module.exports =  carRouter;