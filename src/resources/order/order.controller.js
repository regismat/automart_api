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

const updateOrder = (req, res) => {
    const userData = {
        id,
        price_offered
    } = req.body;
    
    const new_price_offered = price_offered;
    
    //check user-input not empty
    if (OrderHelper.validateRequiredInfo(req)) {
        const order = Order.find(id);
        
        //check order exists
        if ( order == -1 ) {
            res.status(400).json(
                {
                    "status": 400,
                    "message": "purchase order not found"
                });
        } else {
            //check order status not "accepted" nor "rejected"
            order.price_offered;
            if ( ["accepted","rejected"].includes(order.status)) {
                res.status(400).jsons(
                    {
                        "status": 400,
                        "message": "this deal has taken an end."
                    }
                )
            } else {
                const old_price_offered = order.price_offered;
                order.price_offered = new_price_offered;
                //return formated response body
                res.status(200).json(
                    {
                        "status": 200,
                        "data": {
                            "id": order.id,
                            "car_id": order.car_id,
                            "created_on": order.created_on,
                            "status": order.status,
                            "old_price_offered": old_price_offered,
                            "new_price_offered": new_price_offered
                        }
                    }
                )
            }
        }
    }
        
            
                
                    
}

module.exports = {
    createOrder,
    updateOrder
}