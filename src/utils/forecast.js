const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/2215a973054600df6e9a11a3838b7e15/'+ latitude +','+ longitude +'?units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connec to weather service', undefined )
        } else if (body.error) {
            callback('Unable to find location', undefined )
        } else {
            callback(undefined, body.daily.data[0].summary +' It is corrently ' + body.currently.temperature +' degrees out. There is a ' + body.currently.precipProbability + "% chance of rain.")
        }
    })
}

module.exports = forecast