let User = require('./user.model')

const checkUniqEmail = (email) => {
    return user = User.findByEmail(email);
}

const checkRequiredInfo = (email, password) => {
    if(email==="" || password==="") {
        return false;
    }else{
        return true
    }
}

module.exports = {
    checkUniqEmail,
    checkRequiredInfo
}