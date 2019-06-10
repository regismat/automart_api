const app = require('./../server');
const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const should = chai.should();
let Cars = require('../seeds/cars');

describe('Create car advertisement', function(){
    
    describe('POST /api/v1/car', function(){
        it('should create a car advertisement with status code 200', function(done){
            request(app)
                .post('/api/v1/car')
                .set('Accept','application/json')
                .send(Cars.correctCarData)
                .expect(200)
            done();
        })

        it('should not create a car advertisement and return status code 400', function (done) {
            request(app)
                .post('/api/v1/car')
                .set('Accept', 'application/json')
                .send(Cars.notCorrectCarData)
                .expect(400)
            done();
        })
    })
})

describe('Mark posted car advertisement as sold ', function () {

    describe('PATCH /api/v1/car', function () {
        it('should update a car advertisement as sold with status code 200', function (done) {
            request(app)
                .patch('/api/v1/car')
                .set('Accept', 'application/json')
                .send(Cars.correctSoldCarData)
                .expect(200)
            done();
        })

        it('should not update a car advertisement because of incorrect data, and return status code 400', function (done) {
            request(app)
                .patch('/api/v1/car')
                .set('Accept', 'application/json')
                .send(Cars.notCorrectCarData)
                .expect(400)
            done();
        })
    })
})