let Car = require('./car.model')

//required information: owner, state, price, manufacturer, model, body_type

const validateRequiredInfo = (req) => {
    const {
        owner,
        state,
        price,
        manufacturer,
        model,
        body_type
    } = req.body;
    if (
        owner == "" ||
        state == "" ||
        price == "" ||
        manufacturer == "" ||
        model == "" ||
        body_type == ""
    ) {
        return false;
    } 
    else {
        return true;
    }
}

const validateCarExists = (id) => {
    const car = Car._dataSet[id-1];
    return car;
}


module.exports = {
    validateRequiredInfo,
    validateCarExists
}