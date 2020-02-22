const router = require('./auth-router.js');
const db = require('./../database/dbConfig.js');
const request = require('supertest');

describe('POST /register', () => {
    it('should return the newly registered user', async (done) => {
        request(router)
            .post('/register')
            .send({ username: 'jimmique', password: 'password' })
            .set('Accept', 'application/json')
            .expect(201, {
                username: 'jimmique'
            }, done);
    });

    it('should return a 500 error', async (done) => {
        request(router)
            .post('/register')
            .send({ username: 'user' })
            .set('Accept', 'application/json')
            .expect(500, done);
    });
});

describe('POST /login', () => {
    it('should return a 200 status', async (done) => {
        request(router)
            .post('/login')
            .send({ username: 'jimmique', password: 'password' })
            .set('Accept', 'application/json')
            .expect(200, done);
    });

    it('should return a 401 error', async (done) => {
        request(router)
            .post('/login')
            .send({ username: 'jimmique', password: 'drowssap' })
            .set('Accept', 'application/json')
            .expect(401, done);
    });

});



