const axios = require('axios');


const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://samples.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2612508e5e1035229bdf5352f0193926`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}