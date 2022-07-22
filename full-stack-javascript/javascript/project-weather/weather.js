import { OpenWeatherMapAPIKey } from '../../../keyvault/keyvault.js';
const ICON_URL = 'http://openweathermap.org/img/wn/';

let units;
let data = {};
const elements = {
  containerLeft: document.querySelector('.current>.display>.left'),
  containerRight: document.querySelector('.current>.display>.right'),
  searchInput: document.querySelector('#search-param'),
};

(async function init() {
  const defaultLocation = 'New York';
  document.querySelector('#search-submit').addEventListener('click', () => { setCurrentWeatherData(elements.searchInput.value) });
  document.querySelector('#temp-unit-selector').addEventListener('click', () => setUnits());

  elements.searchInput.value = defaultLocation;
  await setCurrentWeatherData('New York');
  setUnits();
})();

function setUnits() {
  if (!units) {
    units = '°C'
  } else if (units === '°C') {
    units = '°F';
  } else {
    units = '°C';
  }
  document.querySelector('#temp-unit-selector').textContent = units;
  setTemps();
  // doc
}

function setNonTemps() {
  const weatherMain = data.weather[0].main;
  const weatherDesc = data.weather[0].description;
  const humidity = data.main.humidity;
  const visibility = data.visibility;
  const windSpeed = data.wind.speed;
  const windDirection = data.wind.deg;
  elements.containerLeft.querySelector('.weather>img').src = ICON_URL + data.weather[0].icon + '.png';
  elements.containerLeft.querySelector('.weather>.main').textContent = weatherMain;
  elements.containerLeft.querySelector('.weather>.desc').textContent = '(' + weatherDesc + ')';
  elements.containerLeft.querySelector('.humidity>span:last-child').textContent = humidity + '%';
  elements.containerLeft.querySelector('.visibility>span:last-child').textContent = visibility + ' m';
  elements.containerLeft.querySelector('.wind>.speed').textContent = windSpeed + ' m/s';
  elements.containerLeft.querySelector('.wind>.direction').textContent = windDirection + ' deg';
}

function setTemps(tempUnitConverter) {
  const tempKCurrent = data.main.temp;
  const tempKMin = data.main.temp_min;
  const tempKMax = data.main.temp_max;
  const tempFeelsKLike = data.main.feels_like;
  elements.containerRight.querySelector('.current>span:nth-child(2)').textContent = tempConverter(tempKCurrent);
  elements.containerRight.querySelector('.current>span:nth-child(3)').textContent = units;
  elements.containerRight.querySelector('.min>span:nth-child(2)').textContent = tempConverter(tempKMin);
  elements.containerRight.querySelector('.min>span:nth-child(3)').textContent = units;
  elements.containerRight.querySelector('.max>span:nth-child(2)').textContent = tempConverter(tempKMax);
  elements.containerRight.querySelector('.max>span:nth-child(3)').textContent = units;
  elements.containerRight.querySelector('.feels-like>span:nth-child(2)').textContent = tempConverter(tempFeelsKLike);
  elements.containerRight.querySelector('.feels-like>span:nth-child(3)').textContent = units;
}

function tempConverter(tempInK) {
  let returnVal;
  if (units === '°C') {
    returnVal = tempInK - 273.15;
  } else {
    returnVal = (tempInK - 273.15) * (9 / 5) + 32;
  }
  return Math.floor(returnVal * 10) / 10;
}

async function setCurrentWeatherData(searchParam) {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchParam}&appid=${OpenWeatherMapAPIKey}`);
  const x = await response.json();
  console.log(x);
  if (x.cod === 200) {
    data = x;
    console.log(data);
    setNonTemps();
    setTemps();
  } else {
    alert(x.cod + ': ' + x.message);
  }
}