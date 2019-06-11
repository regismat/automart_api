/*
id”: Integer, 
“buyer”: Integer, 
“car_id”: Integer, 
“amount”: Float, 
“status”: String,
// user id
// price offered
// [pending, accepted, or rejected]
}“
status”: Integer, 
“data”: }“
id”: I nteger, “car_id”: Integer, “created_on”: DateTime, “status”: String, “price”: Float, “price_offered”: Float, ...
}}
*/
let Car = require('../car/car.model');
let User = require('../user/user.model');

class Order {
    constructor({ buyer, car_id, price_offered }) {
        this.id = Order._dataSet.length + 1;
        this.buyer = buyer;
        this.car_id = car_id;
        this.price_offered = price_offered; 
        this.status = "pending";   
        this.created_on = new Date().toLocaleString('en-GB', 
            {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
            }
        );
    }
    
    static create(order) {
        Order._dataSet.push(order);
        const car = Car._dataSet[order.car_id - 1];
        const car_buyer = User._dataSet[order.buyer - 1];
        
        if ( car ) order.price = car.price;

        if ( car_buyer ) order.email = car_buyer.email;
        
        return order;

    }

    static find(id) {
        const order = Order._dataSet[id-1];
        if( order ) {
            return order;
        } else {
            return -1;
        }
    }
};


Order._dataSet = [];

module.exports = Order;