let User = require('./user.model');
const UserHelper = require('./user.helper');

const signup = (req, res) => {
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
                .json(
                    {
                        status: 400,
                        message: "Email already registered. Try with another."
                    }
                )
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
}

const signin = (req, res) => {
    const {
        email,
        password
    } = req.body;
    
    if (UserHelper.checkRequiredInfo(email, password)) {
        const userFound = UserHelper.checkUniqEmail(email);
        console.log(userFound);
        if (userFound != undefined) {
            try
            {
                if (UserHelper.checkPasswordMatch(userFound, password)) {

                    userFound.token = "45erkjherht45495783";
                    res.status(200)
                        .json({
                            "status": 200,
                            "data": userFound
                        })
                } else {
                    res.status(400)
                        .json({
                            "status": 400,
                            "message": "invalid password"
                        })
                }
            }
            catch(err){
                throw new Error('Signin error: ' + err);
            }
        } else {
            res.status(400)
                .json(
                    {
                        "status": 400,
                        "message": "account not found"
                    }
                )
        }
    } else {
        res.status(400)
            .json({
                "status": 400,
                "message": "email or pasword empty"
            })
    }
}


module.exports = {
    signup,
    signin
}