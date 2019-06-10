const carRouter = require('express').Router();
const CarCtrl = require('./car.controller');

carRouter.get('/', CarCtrl.getCars);
carRouter.post('/', CarCtrl.createCar);
carRouter.patch('/:id/status', CarCtrl.updateCarStatus);
carRouter.patch('/:id/price', CarCtrl.updateCarPrice);

module.exports =  carRouter;
