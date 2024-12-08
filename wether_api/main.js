
const API_KEY = "c21030019dd1425a953111107240812";
// const API_KEY = "7c8482fe2fe802f6c11abe246b0cf89f";

const LAT = "32.087337";
const LON = "34.804120";

async function getWetherData() {
    try {
        console.log("hello");
        
        // const weather = await fetch(`https://cors-anywhere.herokuapp.com/?https://api.openweathermap.org/data/2.5/onecall?lat=${LAT}&lon=${LON}&appid=${API_KEY}`)
        // const weather = await fetch(`https://cors-anywhere.herokuapp.com/https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${LON},${LAT}`);
        const weather = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${LON},${LAT}`);
        console.log(weather);
    } catch (err) {
        console.error(err);
        
    }
}
getWetherData();

