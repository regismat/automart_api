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
    const {status} = req.query;
    const allCars = Car.getCars();
    let found_cars = [];
    if( req.query ) {   
        if ( status ) {
            found_cars = allCars.filter(car => car.stus == status );
        }
    }
    res.status(200).json(
        {
            "status":200,
            "data": found_cars   
        });
}




module.exports = {
    createCar,
    updateCarStatus,
    updateCarPrice,
    getCars
}