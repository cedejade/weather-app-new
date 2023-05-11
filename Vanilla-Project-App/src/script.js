function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("temperature");
  let cityElement = document.querySelector("city");
  let humidityElement = document.querySelector("humidity");
  let windElement = document.querySelector("wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.main;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "2ff29bed3181c3526c35cc5408037f85";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
