const app = require('./../server');
const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const should = chai.should();
let Cars = require('../seeds/cars');
let CarCrtl = require('../src/resources/car/car.controller');

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

describe('Update price of posted car advertisement', function () {

    describe('PATCH /api/v1/car/:id/', function () {
        it('should update a car advertisement with provided price, and respend with status code 200', function (done) {
            request(app)
                .patch('/api/v1/car/1/price')
                .set('Accept', 'application/json')
                .send(Cars.correctSoldCarData)
                .expect(200)
            done();
        })

        it('should not update a car advertisement because of incorrect data, and return status code 400', function (done) {
            request(app)
                .patch('/api/v1/car/1/price')
                .set('Accept', 'application/json')
                .send(Cars.notCorrectCarData)
                .expect(400)
            done();
        })
    })
})

describe('View all unsold cars', function () {
    describe('GET /api/v1/car?status=available', function () {
        let found_cars;
        it('should return an array of cars, returning a status code of 200', function (done) {
            request(app)
                .get('/api/v1/car?status=available')
                .set('Accept', 'application/json')
                .expect(200)
                .then(res => {
                    res.body.should.be.a("Object");
                    res.body.should.have.property("status");
                    res.body.should.have.property("data")
                    expect(res.body.data).to.be.an('array');
                });
           done();
            
        })
    })
})

describe('View a specific car', function () {
    describe('GET /api/v1/car/:id', function () {
        it('should return null, with a status code of 400 when no car found', function (done) {
            request(app)
                .get('/api/v1/car/10000')
                .set('Accept', 'application/json')
                .expect(400)
                .then(res => {
                    res.body.should.be.a("Object")
                    res.body.should.have.property("status")
                    res.body.should.have.property("data")
                    res.body.should.have.property("message")
                });
            done();
        })

        it('should return the found car, with a status code of 200', function (done) {
           before(()=>{
               const addedCar = CarCrtl.createCar(Cars.correctCarData);
               console.log('added car:', addedCar)
           })
            request(app)
                .get('/api/v1/car/1')
                .set('Accept', 'application/json')
                .expect(200)
            done();
        })
    })
})

describe('View all unsold cars within a price range', function () {
    describe('GET /api/v1/car?status=available&min_price=x&max_price=y', function () {
        let found_cars;
        it('should return an array of cars, returning a status code of 200', function (done) {
            request(app)
                .get('/api/v1/car?status=available&min_price=0&max_price=10000')
                .set('Accept', 'application/json')
                .expect(200)
                .then(res => {
                    res.body.should.be.a("Object");
                    res.body.should.have.property("status");
                    res.body.should.have.property("data")
                    expect(res.body.data).to.be.an('array');
                });
            done();

        })
    })
})

describe('View all posted car ads whether sold or available ', function () {
    describe('GET /api/v1/car', function () {
        it('should return an array of cars, returning a status code of 200', function (done) {
            request(app)
                .get('/api/v1/car')
                .set('Accept', 'application/json')
                .expect(200)
                .then(res => {
                    res.body.should.be.a("Object")
                    res.body.should.have.property("status");
                    res.body.should.have.property("data")
                    expect(res.body.data).to.be.an('array');
                });
            done();

        })
    })
})

describe('View all new unsold cars', function () {
    describe('GET /api/v1/car?status=available&state=new', function () {
        it('should return an array of cars, returning a status code of 200', function (done) {
            request(app)
                .get('/api/v1/car?status=available&state=new')
                .set('Accept', 'application/json')
                .expect(200)
                .then(res => {
                    res.body.should.be.a("Object")
                    res.body.should.have.property("status");
                    res.body.should.have.property("data")
                    expect(res.body.data).to.be.an('array');
                    expect(res.body.data.length).to.equal(1)
                });
            done();

        })
    })
})

describe('View all cars of a specific body type', function () {
    describe('GET /api/v1/car?body_type=BodyType', function () {
        it('should return an array of cars of same body-type, with a status code of 200', function (done) {
            request(app)
                .get('/api/v1/car?body_type=van')
                .set('Accept', 'application/json')
                .expect(200)
                .then(res => {
                    res.body.should.be.a("Object")
                    res.body.should.have.property("status");
                    res.body.should.have.property("data")
                    expect(res.body.data).to.be.an('array');
                    expect(res.body.data.length).to.equal(1)
                });
            done();

        })
    })
})

describe('View all cars of a specific Manufacturer/marker', function () {
    describe('GET /api/v1/car?status=available&manufacturer=XXX', function () {
        it('should return an array of cars of specific maker, with a status code of 200', function (done) {
            request(app)
                .get('/api/v1/car?status=available&manufacturer=Mercedes')
                .set('Accept', 'application/json')
                .expect(200)
                .then(res => {
                    res.body.should.be.a("Object")
                    res.body.should.have.property("status");
                    res.body.should.have.property("data")
                    expect(res.body.data).to.be.an('array');
                    expect(res.body.data.length).to.equal(1)
                });
            done();

        })
    })
})