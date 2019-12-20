const supertest = require('supertest');
const { expect } = require('chai');

const server = require('../../src/server/server');
let superAgent = supertest(server);
describe('supertest + express', () => {
    it('get users #1', async () => {
        const response = await superAgent.get('/users').set({'Content-Type': 'application/json'}).expect(res => res);
        expect(response.statusCode).to.be.equal(200);
        expect(response.body.name).to.be.equal('Hatula');
        expect(response.body.id).to.be.equal('meow@49');
    });
    it('get users #2', async () => {
        const response = await superAgent.get('/users').set({'Content-Type': 'application/json'}).expect(200);
        expect(response.body.name).to.be.equal('Hatula');
        expect(response.body.id).to.be.equal('meow@49');
    });
    it('get users #2', async () => {
        const response = await superAgent.get('/users').set({'Content-Type': 'application/json'});
        expect(response.statusCode).to.be.equal(200);
        expect(response.body.name).to.be.equal('Hatula');
        expect(response.body.id).to.be.equal('meow@49');
    });
})
