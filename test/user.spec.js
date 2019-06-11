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

describe('User Signup', function () {
    
    describe('POST /api/v1/auth/signup', function () {
        it('should create a new user with status code 200', function (done) {
            request(app)
                .post('/api/v1/auth/signin')
                .set('Accept', 'application/json')
                .send(correctUserData)
                .expect(200);
                done();
        });

        it('should return a message error in case the email address exist already', function (done) {
            request(app)
                .post('/api/v1/auth/signin')
                .set('Accept', 'application/json')
                .send(emailExistUserData)
                .expect(400);
                done();
        });

        it('should return a message error with status code 400 in case email or password empty', function (done) {
            request(app)
                .post('/api/v1/auth/signin')
                .set('Accept', 'application/json')
                .send(emptyUserData)
                .expect(400);
                done();
        });
    });
})

describe('User login', function() {
    describe('POST /api/v1/auth/signin', function() {
        it('should connect the user based on provided email and password, with status code 200', function (done) {
            request(app)
                .post('/api/v1/auth/signin')
                .set('Accept', 'application/json')
                .send(correctUserData)
                .expect(200);
                done();
        })

        it('should return an error with status code 400 when password does not match', function (done) {
            request(app)
                .post('/api/v1/auth/signin')
                .set('Accept', 'application/json')
                .send(wrongPassWordUserData)
                .expect(400);
                
            done();
        })

        it('should return an error with status code 400 when email does not exist', function (done) {
            request(app)
                .post('/api/v1/auth/signin')
                .set('Accept', 'application/json')
                .send(correctUserData)
                .expect(400);
            done();
        })
    })
})

describe('Password reset', function () {
    describe('PATCH /api/v1/auth/reset_password', function () {
        it('should update the user password based on provided email and password, with status code 200', function (done) {
            request(app)
                .post('/api/v1/auth/reset_password')
                .set('Accept', 'application/json')
                .send(
                    {
                        "email": "dav@gmail.com",
                        "new_password": 123456
                })
                .expect(200);
            done();
        })

        it('should return an error with status code 400 when new password or email not provided', function (done) {
            request(app)
                .post('/api/v1/auth/reset_password')
                .set('Accept', 'application/json')
                .send(
                    {
                        "email": "",
                        "new_password": 123456
                    }
                )
                .expect(400);

            done();
        })
    })
})
