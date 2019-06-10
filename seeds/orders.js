const orders = {
    correctOrderData: {
        "buyer": 2,
        "car_id": 1,
        "price_offered": 5000
    },
    notCorrectOrderData: {
        "buyer": "",
        "car_id": 2,
        "price_offered": 5000
    },
    correctOrderUpdatePriceData: {
        "id": 1,
        "buyer": 2,
        "car_id": 1,
        "price_offered": 6000
    },
    notcorrectOrderUpdatePriceData: {
        "id": 1,
        "buyer": 2,
        "car_id": 1,
        "price_offered": 6000,
        "status": "accepted"
    }
}