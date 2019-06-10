const app = require('../server');
const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const should = chai.should();
let Orders = require('../seeds/orders');

describe('Create a purcahse order', function(){
    
    describe('POST /api/v1/order', function(){
        it('should create a purcahse order with status code 200', function (done) {
            request(app)
                .post('/api/v1/car')
                .set('Accept','application/json')
                .send(Orders.correctOrderData)
                .expect(200)
            done();
        })

        it('should not create a car advertisement and return status code 400', function (done) {
            request(app)
                .post('/api/v1/car')
                .set('Accept', 'application/json')
                .send(Orders.notCorrectOrderData)
                .expect(400)
            done();
        })
    })
})