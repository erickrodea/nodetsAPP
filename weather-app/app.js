const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")


const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        })
    })
}

// node app.js Boston

// geocode('Boston', (error, data) => {
//     console.log("Error", error)
//     console.log("Data", data)


//     forecast(data.latitude, data.longitude, (error, data) => {
//         console.log("Error", error)
//         console.log("Data", data)
//     })
// })

// console.log('starting');

// setTimeout(() => {
//     console.log('2 second timer')

// }, 2000)//timing in seconds


// setTimeout(() => {
//     console.log('0Second Timer')
// }, 0)

// console.log('stopping');




//main function will run first before the timeout i believe it relates to event loop and call stack


// const url = "http://api.weatherstack.com/current?access_key=00a092e9912719092a330bd61d298840&query=New%20York&units=f"//http url with key and location i want to access

// request({ url: url, json: true }, (error, response) => {//function takes in error and a response including json info we need
//     // const data = JSON.parse(response.body)//parsing the data in the body section
//     //console.log(response.body.current)//accessing the current obj to get that data

//     if (error) {
//         console.log("unable to connect to weather servoce")
//     } else if (response.body.error) {
//         console.log("unable to find location")
//     }
//     else {
//         console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " it feel like " + response.body.current.feelslike + " degrees")

//     }
// })

//Geocoding
//Adress -> lat/long-->weather
//limit =1 to get only one result




// "https://api.mapbox.com/geocoding/v5/mapbox.places/'.json?access_token=pk.eyJ1IjoiZXJvZC05NyIsImEiOiJjbHB2bjBzdXcwNTZvMmxxcWQ3cmkxdm51In0.45Kx20Bi-7fPTHTRugMQCg&limit=1"

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('unable to connect to location services!')
//     }
//     else if (response.body.features.length === 0) {
//         console.log('unable to find location try another search')


//     }
//     else {

//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }

// });

// const geocode = (address, callback) => {
//     const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZXJvZC05NyIsImEiOiJjbHB2bjBzdXcwNTZvMmxxcWQ3cmkxdm51In0.45Kx20Bi-7fPTHTRugMQCg&limit=1';

    // request({ url: url, json: true }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to location services!', undefined);
//         } else if (response.body.features.length === 0) {
//             callback('Unable to find location. Try another search.', undefined);
//         } else {
//             // If there are features, pass the data to the callback
//             callback(undefined, {
//                 latitude: response.body.features[0].center[1],
//                 longitude: response.body.features[0].center[0],
//                 location: response.body.features[0].place_name
//             });
//         }
//     });
// };


// geocode('New York', (error, data) => {
//     console.log("Error", error)
//     console.log("Data", data)
// })

// forecast(-75.7088,44.1545, (error, data) => {
//     console.log("Error", error)
//     console.log("Data",data)
// })
