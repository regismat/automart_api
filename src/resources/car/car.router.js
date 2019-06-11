const carRouter = require('express').Router();
const CarCtrl = require('./car.controller');

carRouter.get('/', CarCtrl.getCars);
carRouter.post('/', CarCtrl.createCar);
carRouter.get('/:id', CarCtrl.getCar);
carRouter.patch('/:id/album', CarCtrl.updateAlbum);
carRouter.delete('/:id', CarCtrl.deleteCar);
carRouter.patch('/:id/status', CarCtrl.updateCarStatus);
carRouter.patch('/:id/price', CarCtrl.updateCarPrice);

module.exports =  carRouter;
