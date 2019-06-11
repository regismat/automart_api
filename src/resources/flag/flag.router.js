const flagRouter = require('express').Router();
const FlagCtrl = require('./flag.controller');

flagRouter.post('/', FlagCtrl.createFlag);

module.exports =  flagRouter;