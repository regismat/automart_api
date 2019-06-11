class Flag {
    constructor({ car_id, reason, description }) {
        this.id = Flag._dataSet.length + 1;
        this.reason = reason;
        this.car_id = car_id;
        this.description = description;
        this.created_on = new Date().toLocaleString('en-GB', 
            {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
            }
        );
    }
    
    static create(flag) {
        Flag._dataSet.push(flag);

        return flag;
    }

    static find(id) {
        const flag = Flag._dataSet[id-1];
        if( flag ) {
            return flag;
        } else {
            return -1;
        }
    }
};


Flag._dataSet = [];

module.exports = Flag;