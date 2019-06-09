const userRouter = require('express').Router();
const UserCtrl = require('./user.controller');
const User = require('../user/user.model');

userRouter.post('/signup', UserCtrl.signup);
userRouter.post('/signin', UserCtrl.signin );

module.exports =  userRouter;