const app = require('../server');
const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const should = chai.should();
let Orders = require('../seeds/orders');
let Order = require('../src/resources/order/order.model');
describe('Create a purchase order', function(){
    describe('POST /api/v1/order', function(){
        it('should create a purchase order with status code 200', function (done) {
            request(app)
                .post('/api/v1/order')
                .set('Accept','application/json')
                .send(Orders.correctOrderData)
                .expect(200)
            done();
        })

        it('should not create a purchase order and return status code 400', function (done) {
            request(app)
                .post('/api/v1/order')
                .set('Accept', 'application/json')
                .send(Orders.notCorrectOrderData)
                .expect(400)
            done();
        })
    })
})

describe('Update the offered price of a purchase order', function () {

    describe('PATCH /api/v1/order/:id', function () {
        it('should update a purchase order with status code 200', function (done) {
            request(app)
                .patch('/api/v1/order/id')
                .set('Accept', 'application/json')
                .send(Orders.correctOrderUpdatePriceData)
                .expect(200)
            done();
        })

        it('should not update a purchase order when the status is on accepted or rejected, and return status code 400', function (done) {
            
            request(app)
                .patch('/api/v1/order')
                .set('Accept', 'application/json')
                .send(Orders.notcorrectOrderUpdatePriceData)
                .expect(400)
            done();
        })

        it('should not update a purchase order when the status of is on accepted or rejected, and return status code 400', function (done) {

            request(app)
                .patch('/api/v1/order')
                .set('Accept', 'application/json')
                .send(Orders.notcorrectOrderUpdatePriceData)
                .expect(400)
            done();
        })
    })
})