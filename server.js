const express = require('express');
const bodyParser = require('body-parser');
let port = 3000;
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));

app.get("/", (req,res) => {
    res.status(200).json({
        message: "Basic configuration achived successfully"
    });
});
 
if(!module.parent){
    app.listen(port, ()=> console.log('Listening on port: ', port));
}

module.exports = app;