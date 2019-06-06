
const app = require('./../server');
var request = require('supertest');
describe('Basic server test configurations for mocha and travis', function(){
    context('GET /', function () {
        it('responds with json', function (done) {
            request(app)
                .get('/')
                .set('Accept', 'application/json')
                .expect(200, done);
        });
    });
})
