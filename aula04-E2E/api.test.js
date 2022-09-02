const {describe, it} = require('mocha')
const request = require('supertest')
const assert = require('assert')

const app = require('./api')

describe('API test suit', () => {
    describe('/contact', () => {
        it('sould request the contact page and return HTTP Status 200', async() => {
            const resp = await request(app)
                    .get('/contact')
                    .expect(200)
            assert.deepStrictEqual(resp.text, 'contact us')
        })
    })
    describe('/hello', () => {
        it('sould request an inexistent route and redirect do default route', async() => {
            const resp = await request(app)
                    .get('/hello')
                    .expect(200)
            assert.deepStrictEqual(resp.text, 'hello default')
        })
    })
})