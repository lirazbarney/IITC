const API_KEY = "7c8482fe2fe802f6c11abe246b0cf89f";
const LAT = "32.087337";
const LON = "34.804120";

async function getWetherData() {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}`
    );
    console.log(data);

    buildWeather(data);
  } catch (err) {
    console.error(err);
  }
}

function buildWeather(weatherData) {
  const cityName = document.querySelector(".city-name");
  cityName.textContent = weatherData.name;
}

getWetherData();
