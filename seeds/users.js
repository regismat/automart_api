const users = {
    "correctUserData": {
        "email": "correctuser@gmail.com",
        "password": "123456",
        "address": "Lusaka",
        "first_name": "David",
        "last_name": "Mathe",
        "is_admin": true
    },
    "emptyUserData": {
        "email": "",
        "password": "",
        "address": "",
        "first_name": "",
        "last_name": "",
        "is_admin": ""
    },
    "emailExistUserData": {
        "email": "correctuser@gmail.com",
        "password": "123456",
        "address": "Lusaka",
        "first_name": "David",
        "last_name": "Mathe",
        "is_admin": true
    },
    "wrongPasswordUserData": {
        "email": "correctuser@gmail.com",
        "password": "654321"
    }
}

module.exports = users;