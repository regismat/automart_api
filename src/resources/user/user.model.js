class User {
    constructor(email, password, first_name, last_name, address, is_admin){
        this.email = email;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.address = address || '';
        this.is_admin = is_admin || false;
    }
    
    static create(user) {
        User._dataSet.push(user);
        return {
            "status": 200,
            "data": {
                "token": "45erkjherht45495783",
                "id": this._dataSet.length,
                "email": user.email,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "address": user.address,
                "is_admin": user.is_admin
            }
        }
    }

    static findByEmail(email) {
        return User._dataSet.find(user => user.email == email)
    }
};
User._dataSet = [];

module.exports = User;