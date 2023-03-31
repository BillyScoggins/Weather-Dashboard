
var apiKey = "6bc02efad81fd6e69c73b3f035eba587"

var city = "dallas,tx"

var country = "us"

var coordinatesURL = "http://api.openweathermap.org/geo/1.0/direct?q="+city+country+"&appid="+apiKey;

fetch(coordinatesURL)

  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

  

