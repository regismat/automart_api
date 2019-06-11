let Flag = require('./flag.model');
const FlagHelper = require('./flag.helper');

const createFlag = (req, res) => {
    const userData = {
        car_id,
        reason,
        description
    } = req.body;

    if (FlagHelper.validateRequiredInfo(req)) {
        const flag = Flag.create(new Flag(userData));
        res.status(200)
            .json(
                {
                    "status":200,
                    "data": flag
                }
            )
    } else {
        res.status(400)
            .json(
                {
                    "status":400,
                    "data": "Missing required information"
                }
            )
    }
}

module.exports = {
    createFlag
}