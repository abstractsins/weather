const url = `https://api.openweathermap.org/data/2.5/forecast?`;
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
        let weather = data["list"][0]["weather"];
        
        let forecastEnd = data["list"][0]["dt_txt"].substring(11,16)
        if (forecastEnd[0]==='0') forecastEnd=forecastEnd.substring(1)
        let hour = Number(forecastEnd.substring(0,2));
        if (hour >= 12) {
            forecastEnd = hour-12 + forecastEnd.substring(2);
            forecastEnd += ' p.m.';
        }
        else forecastEnd += ' a.m.';
        
        let temp = Math.round(main["temp"]*10)/10;
        let humidity = main["humidity"];

        let sky = {};
        sky.desc = weather[0]["description"].split('');
        sky.desc = sky.desc.join('')
        if (sky.desc[sky.desc.length-1]==='s') {
            sky.isPlural = true;
        } else sky.isPlural = false;
        if (sky.isPlural) {
            sky.desc += ' are';
            sky.desc.splice(0,1,sky.desc[0].toUpperCase())
        } else sky.desc = 'A ' + sky.desc + ' is';

        console.log(`The temperature right now in Philadelphia is ${temp}°F, with a humidity of ${humidity}%`);
        console.log(`${sky.desc} expected until ${forecastEnd}`)

    })
    .catch(err=>{
        console.error('Red alert! Something went wrong getting the information!');
        console.error(err);
    })
}

getWeather();


/**
 * This space intentionally left blank
 * 
 * 
 */