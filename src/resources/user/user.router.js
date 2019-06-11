const userRouter = require('express').Router();
const UserCtrl = require('./user.controller');

userRouter.post('/signup', UserCtrl.signup);
userRouter.post('/signin', UserCtrl.signin );
userRouter.patch('/reset_pasword/', UserCtrl.passwordReset);
module.exports =  userRouter;