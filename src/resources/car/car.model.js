let User = require('../user/user.model');
class Car {
    constructor({owner,state, price, manufacturer, model, body_type}) {
        this.id = Car._dataSet.length + 1;
        this.owner = owner;
        this.created_on = new Date().toLocaleString('en-GB', 
            {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
            }
        );
        this.status = "available";
        this.state = state;
        this.price = price;
        this.manufacturer = manufacturer;
        this.model = model;
        this.body_type = body_type;
    }
    
    static create(car) {
        Car._dataSet.push(car);
        const user_owner = User._dataSet[owner - 1];
        if( user_owner ) {
            car.email = user_owner.email
        }
        return car;
    }
};

Car._dataSet = [];

module.exports = Car;