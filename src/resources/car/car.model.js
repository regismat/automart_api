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
    static getCar(id) {
        const car = Car._dataSet[id-1];
        if( car != undefined ) {
            return car;
        } else {
            return false;
        }
    }
    static getCars() {
        return Car._dataSet;
    }
};

Car._dataSet = [
    {
        "id": 1,
        "owner": "1",
        "created_on": "6/10/2019",
        "status": "available",
        "state": "used",
        "price": 50000,
        "manufacturer": "Mercedes",
        "model": "M7G",
        "body_type": "SUV"
    },
{
    "id": 2,
    "owner": "1",
    "created_on": "6/10/2019",
    "status": "sold",
    "state": "used",
    "price": 5000,
    "manufacturer": "Toyota",
    "model": "Harrier",
    "body_type": "van"
}
];

module.exports = Car;