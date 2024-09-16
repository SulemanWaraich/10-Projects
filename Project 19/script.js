const userInput = document.getElementById('cityInput');
const btn = document.getElementById('getWeatherBtn');
const cityName = document.getElementById('cityName');
const cityWeather = document.getElementById('weatherCondition');
const cityTemperature = document.getElementById('temperature');
const cityHumidity = document.getElementById('humidity');

btn.addEventListener('click', () => {
  const value = userInput.value;
  fetch(`http://api.weatherapi.com/v1/current.json?key=ee0f5880bafa4b24b6700727241609&q=${value}&aqi=no
`)
.then((res)=>res.json()
.then((res)=>
  {
    console.log(res.location.name);
    
      cityName.innerHTML = `${res.location.name}`;
      cityWeather.innerHTML = `${res.current.wind_kph}`;
      cityTemperature.innerHTML = `${res.current.temp_c}`;
      cityHumidity.innerHTML = `${res.current.humidity}`;
  }
));

})