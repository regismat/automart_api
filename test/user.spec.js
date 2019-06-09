const app = require('./../server');
const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const should = chai.should();
let Users = require('../seeds/users')
const {
    correctUserData,
    emptyUserData,
    emailExistUserData,
    wrongPassWordUserData
} = Users;
//const User = require('../src/resources/user/user.model');

describe('User Signup', function () {
    
    describe('POST /api/v1/auth/signup', function () {
        it('should create a new user', function (done) {
            request(app)
                .post('/api/v1/auth/signin')
                .set('Accept', 'application/json')
                .send(correctUserData)
                .expect(200)
                .then(res => {
                    res.body.should.be.a("Object")
                    res.body.should.have.property("status")
                    res.body.should.have.property("data")
                })
                done();
        });

        it('should return a message error in case the email address exist already', function (done) {
            request(app)
                .post('/api/v1/auth/signin')
                .set('Accept', 'application/json')
                .send(emailExistUserData)
                .expect(400)
                .then(res => {
                    res.body.should.be.a("Object")
                    res.body.should.have.property("status")
                    res.body.should.have.property("message")
                })
            done();
        });

        it('should return a message error in case email or password empty', function (done) {
            request(app)
                .post('/api/v1/auth/signin')
                .set('Accept', 'application/json')
                .send(emptyUserData)
                .expect(400)
                .then(res => {
                    res.body.should.be.a("Object")
                    res.body.should.have.property("status")
                    res.body.should.have.property("message")
                })
            done();
        });
    });
})

describe('User login', function() {
    describe('POST /api/v1/auth/signin', function() {
        it('should connect the user based on provided email and password', function (done) {
            request(app)
                .post('/api/v1/auth/signin')
                .set('Accept', 'application/json')
                .send(correctUserData)
                .expect(200)
                .then( res => {
                    res.body.should.be.a("Object")
                    res.body.should.have.property("status")
                    res.body.should.have.property("data")
                    res.body.data.should.be.a("Object")
                })
            done();
        })

        it('should return an error when password does not match', function (done) {
            request(app)
                .post('/api/v1/auth/signin')
                .set('Accept', 'application/json')
                .send(wrongPassWordUserData)
                .expect(400)
                .then(res => {
                    res.body.should.be.a("Object")
                    res.body.should.have.property("status")
                    res.body.should.have.property("message")
                })
            done();
        })

        it('should return an error when email does not exist', function (done) {
            request(app)
                .post('/api/v1/auth/signin')
                .set('Accept', 'application/json')
                .send(correctUserData)
                .expect(400)
                .then(res => {
                    res.body.should.be.a("Object")
                    res.body.should.have.property("status")
                    res.body.should.have.property("message")
                })
            done();
        })

        
    })
})