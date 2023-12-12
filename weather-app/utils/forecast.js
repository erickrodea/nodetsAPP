const request = require('request');

const forecast = (latitude, longitude, callback) => {
    // Construct the URL for the Weatherstack API
    const url = "http://api.weatherstack.com/current?access_key=00a092e9912719092a330bd61d298840&query=" + latitude + ',' + longitude + "&units=f"
    // console.log(url)
 request({url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if(body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`)
        }
    })
}

module.exports = forecast       