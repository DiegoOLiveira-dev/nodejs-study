//nos ajuda a construir nossas suits de teste separadas
const {describe, it} = require('mocha')
//supertest simula as chamadas http
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
    describe('/login', () => {
        it('sould login successfully on the login route and return http 200', async() => {
            const resp = await request(app)
                    .post('/login')
                    .send({username: "Bill", password: "123"})
                    .expect(200)
            assert.deepStrictEqual(resp.text, 'login has succeeded')
        })
        it('sould login unauthorize on the login route and return http 401', async() => {
            const resp = await request(app)
                    .post('/login')
                    .send({username: "Russel", password: "321"})
                    .expect(401)
            assert.ok(resp.unauthorized)
            assert.deepStrictEqual(resp.text, 'Login failed!')
        })
    })
})