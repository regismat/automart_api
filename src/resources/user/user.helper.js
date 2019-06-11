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

const validateUserExists = (user_id) => {
    const user = User._dataSet[user_id - 1];
    if (user) {
        return user;
    } else {
        return false;
    }
}

const checkCurrentUserIsAdmin = (user_id)=>{
    const user = User._dataSet[user_id - 1];
    if( user ) {
        if( user.is_admin ) {
            return true
        }else{
            return false;
        }
    } else {
        return false;
    }
}

module.exports = {
    checkUniqEmail,
    checkRequiredInfo,
    checkPasswordMatch,
    checkCurrentUserIsAdmin,
    validateUserExists
}