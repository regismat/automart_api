let Car = require('./car.model');
const CarHelper = require('./car.helper');

const createCar = (req, res) => {
    const userData = {
        owner,
        state,
        price,
        manufacturer,
        model,
        body_type
    } = req.body;
    if (CarHelper.validateRequiredInfo(req)) {
        const car = Car.create(new Car(userData));
        res.status(200)
            .json(
                {
                    "status":200,
                    "data": car
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

const updateCarStatus = (req, res) => {
    const userData = {
        status
    } = req.body;
    const id = req.params.id
    //check vailability of id and status
        if( status == "" || id == "") {
            res.status(400).json(
                {
                    "status": 400,
                    "message": "invalid input"
                }
            )
        } else {
            //check availability of car
            const car = CarHelper.validateCarExists(id)
            if ( car ) {
                car.status = "sold";
                res.status(200).json({
                    "status": 200,
                    "data": car
                })
            } else {
                res.status(400).json(
                    {
                        "status": 400,
                        "message": "car ad. not found"
                    }
                )
            }
        }
}

const updateCarPrice = (req, res) => {
    const userData = {
        price
    } = req.body;
    const id = req.params.id;
    //check vailability of id and price
    if (price == "" || id == "") {
        res.status(400).json({
            "status": 400,
            "message": "invalid input"
        })
    } else {
        //check availability of car
        const car = CarHelper.validateCarExists(id);
        if (car) {
            car.price = price;
            res.status(200).json({
                "status": 200,
                "data": car
            })
        } else {
            res.status(400).json({
                "status": 400,
                "message": "car ad. not found"
            })
        }
    }

}

const getCars = (req, res) => {
    const {
        status,
        min_price,
        max_price,
        state,
        body_type,
        manufacturer
    } = req.query;
    const allCars = Car.getCars();
    let found_cars = [];
    if( JSON.stringify(req.query)!="{}" ) {   
        
        if ( status ) {
            found_cars = allCars.filter( car => car.status == status );   
        }
        
        if ( state ) {
            found_cars = allCars.filter( car => car.state == state );
        }

        if ( body_type ) {
            found_cars = allCars.filter( car => car.body_type == body_type );
        }
        
        if ( manufacturer ) {
            found_cars = allCars.filter(car => car.manufacturer == manufacturer);
        }

        if( min_price && max_price ) {
            found_cars = found_cars.filter( car => car.price >= min_price && car.price <= max_price )
        }

    }else{
        return res.status(200).json(
            {
                "status": 200,
                "data": allCars
            }
        )
    }

    res.status(200).json(
        {
            "status":200,
            "data": found_cars   
        });
}

const getCar = (req, res) => {
    const id = req.params.id;
    if( !isNaN(id) ) {
        const car = Car.getCar(id);
        if( car == false ) {
            res.status(400).json(
                {
                    "status":400,
                    "data": null,
                    "message": "car not found"
                }
            )
        } else {
            res.status(200).json(
                {
                    "status": 200,
                    "data": car
                }
            );
        }
    } else {
        res.status(400).json(
            {
                "status": 400,
                "message": "car id not found"
            }
        )
    }
}


module.exports = {
    createCar,
    updateCarStatus,
    updateCarPrice,
    getCars,
    getCar
}