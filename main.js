const url = `http://api.openweathermap.org/data/2.5/forecast?`;
let lat, lon, apiKey = `4b0f817e46e3e6933629134029e153c9`;

lat = `39.9527237`;
lon = `-75.1635262`;
const call = `${url}lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`

// GET
const getWeather = async() => {
    await fetch(call)
    .then(response => response.json())
    .then(data => {
        let main = data["list"][0]["main"];
        let temp = main["temp"];
        let humidity = main["humidity"];
        console.log(`The temperature right now in Philadelphia is ${temp}°F`);
        console.log(`with a humidity of ${humidity}%`);

    })
    .catch(err=>{
        console.error('Red alert! Something went wrong getting the information!');
        console.error(err);
    })
}
getWeather()