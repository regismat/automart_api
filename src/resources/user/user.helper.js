let User = require('./user.model')

const checkUniqEmail = (email) => {
    let user = User.findByEmail(email);
    return user; 
}

const checkRequiredInfo = (email, password) => {
    if(email==="" || password==="") {
        return false;
    }else{
        return true
    }
}

const checkPasswordMatch = (user, password) => {
    if ( user.password == password ) {
        console.log('password: ', password);
        return true;
    }else{
        return false;
    }
}

module.exports = {
    checkUniqEmail,
    checkRequiredInfo,
    checkPasswordMatch
}