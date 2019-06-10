let Order = require('./order.model')

const validateRequiredInfo = (req) => {
    const userData = {
        buyer,
        car_id,
        price_offered
    } = req.body;
    if (
        buyer == "" ||
        car_id == "" ||
        price_offered == "" 
    ) 
        {
            return false;
        } 
    else 
        {
            return true;
        }
}

const validateOrderStatus = (id) => {
    const userData = {
        id,
        price_offered
    } = req.body;
    const order = Order._dataSet[id-1]
    if ( !order == "" ) {
        if ( ["accepted", "rejected"].includes(order.status) ) {
            return false;
        } else {
            return true;
        }
    }
}

module.exports = {
    validateRequiredInfo
}