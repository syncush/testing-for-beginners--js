const nock = require('nock');
const {expect} = require('chai');

const weatherService = require('../../src/weather-service/service');

describe('nock', () => {
    it('fake weather report', async () => {
        nock('http://service.com').get('/weather/israel').reply(200, { tel_aviv: 100, jerusalem: 12 });
        const telAvivWeather = await weatherService.getWeather();
        expect(telAvivWeather).to.be.equal(100);
    });
});
