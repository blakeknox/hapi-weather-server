const Axios = require('axios');

const weatherApiKey = 'f25e4ada0a50fb0ddcbd800eb3ed6945';
const weatherApiRoot = 'https://api.openweathermap.org/data/2.5';

async function getCurrentWeather(zip) {
    const method = '/weather';
    const params = `?zip=${zip},us&units=imperial&appid=${weatherApiKey}`;

    const url = `${weatherApiRoot}${method}${params}`;

    let obj = {};
    try {
        const response = await Axios.get(url);
        obj = response.data;
    } catch (error) {
        obj.error = error;
    }
    return obj;
}

module.exports = {
    getCurrent: getCurrentWeather
};