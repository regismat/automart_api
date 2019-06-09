//import express from 'express';
//import userRoute from './src/resources/user/user.router';

const express = require('express');
const bodyParser = require('body-parser');
let port = 3000;
let app = express();
const userRoute = require('./src/resources/user/user.router');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));

//register routes
//app.use('/api/v1');
//app.post('/api/auth/signup', )
//app.use(router);

app.get("/api/v1", (req,res) => {
    res.status(200).json({
        message: "Basic configuration achived successfully"
    });
});

app.use('/api/v1/auth', userRoute);

 
if(!module.parent){
    app.listen(port, ()=> console.log('Listening on port: ', port));
}

module.exports = app;