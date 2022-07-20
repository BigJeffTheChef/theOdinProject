fetch('http://api.openweathermap.org/data/2.5/weather?q=Belfast&appid=a0d46b0ad51d9b6570c056c3a3a96f8c')
  .then(function (response) {
    console.log(response.get);
  }).catch(function (err) {
    console.log(`a wild error has appeared: ${err}`);
  })