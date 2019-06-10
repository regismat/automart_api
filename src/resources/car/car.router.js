const carRouter = require('express').Router();
const CarCtrl = require('./car.controller');

carRouter.post('/', CarCtrl.createCar);
carRouter.patch('/', CarCtrl.updateCarStatus);

module.exports =  carRouter;