const request = require('request-promise-native');

module.exports.getWeather = async function() {
    const israelWeatherResponse = await request.get('http://service.com/weather/israel', { json: true });
    return israelWeatherResponse.tel_aviv;
}
