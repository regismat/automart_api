const validateRequiredInfo = (req) => {
    const userData = {
        car_id,
        reason,
        description
    } = req.body;
    if (
        car_id == "" ||
        reason == "" ||
        description == "" 
    ) 
        {
            return false;
        } 
    else 
        {
            return true;
        }
}

module.exports = {
    validateRequiredInfo
}