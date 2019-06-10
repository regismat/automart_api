let Order = require('./order.model');
const OrderHelper = require('./order.helper');

const createOrder = (req, res) => {
    const userData = {
        buyer,
        car_id,
        price_offered
    } = req.body;

    if (OrderHelper.validateRequiredInfo(req)) {
        const order = Order.create(new Order(userData));
        res.status(200)
            .json(
                {
                    "status":200,
                    "data": order
                }
            )
    } else {
        res.status(400)
            .json(
                {
                    "status":400,
                    "message": "Missing required information"
                }
            )
    }
}

module.exports = {
    createOrder
}