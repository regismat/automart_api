const userRouter = require('express').Router();
const { signup } = require('./user.controller');

const User = require('../user/user.model');

userRouter.post('/signup',signup);

module.exports =  userRouter;