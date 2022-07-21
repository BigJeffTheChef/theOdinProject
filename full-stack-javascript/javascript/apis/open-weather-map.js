import { OpenWeatherMapAPIKey } from '../../../keyvault/keyvault.js';

fetch(`http://api.openweathermap.org/data/2.5/weather?q=Belfast&appid=${OpenWeatherMapAPIKey}`)
  .then(function (response) {
    console.log(response);
  }).catch(function (err) {
    console.log(`a wild error has appeared: ${err}`);
  });