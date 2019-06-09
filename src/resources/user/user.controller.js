let User = require('./user.model');
const UserHelper = require('./user.helper');

exports.signup = ( (req, res) => {
    const {
        email,
        password,
        first_name,
        last_name,
        address,
        is_admin
    } = req.body;
    if (UserHelper.checkRequiredInfo(email, password)) {
        const userFound = UserHelper.checkUniqEmail(email);

        if (userFound) {
            res.status(400)
                .json({
                    status: 400,
                    success: false,
                    message: "Email already registered. Try with another."
                })
        } else {
            let user = new User(email, password, first_name, last_name, address, is_admin);
            const returned_json = User.create(user, res);
            res.status(200)
                .json(returned_json);
        }
    } else {
        res.status(400)
            .json(
                {
                    status: 400,
                    message: "Email or password empty"
                }
            )
    }
})

