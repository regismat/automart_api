const express = require('express');
const bodyParser = require('body-parser');
let port = 3000;
let app = express();
const userRoute = require('./src/resources/user/user.router');
const carRoute = require('./src/resources/car/car.router');
const orderRoute = require('./src/resources/order/order.router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));

app.get("/api/v1", (req,res) => {
    res.status(200).json({
        message: "Basic configuration achieved successfully"
    });
});

app.use('/api/v1/auth', userRoute);
app.use('/api/v1/car', carRoute);
app.use('/api/v1/order', orderRoute)

if(!module.parent){
    app.listen(port, ()=> console.log('Listening on port: ', port));
}

module.exports = app;