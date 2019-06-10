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


module.exports = {
    validateRequiredInfo
}