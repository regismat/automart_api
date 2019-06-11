const app = require('../server');
const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const should = chai.should();

describe('Flag/report ad as fraudulent', function () {
    describe('POST /api/v1/flag', function () {
        it('should create fraud report for a car advertisement, with status code 200', function (done) {
            request(app)
                .post('/api/v1/flag')
                .set('Accept', 'application/json')
                .send({
                    "car_id": 1,
                    "reason": "never deliver",
                    "description": "money never come back"
                })
                .expect(200)
            done();
        })

        it('should not create a car adverstisement when required information not provided, and return status code 400', function (done) {
            request(app)
                .post('/api/v1/flag')
                .set('Accept', 'application/json')
                .send({
                    "car_id": 1,
                    "reason": "",
                    "description": ""
                })
                .expect(400)
                .then(res => {
                    res.body.should.be.a("Object")
                    res.body.should.have.property("status")
                    res.body.should.have.property("data")
                    res.body.status.should.equal(400)
                });
            done();
        })
    })
})