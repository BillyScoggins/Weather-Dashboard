var cityform = document.getElementById("citySelector");
var btn = document.getElementById("btn");
var temp = document.getElementById("temp");
var humidity = document.getElementById("humidity");
var windSpeed = document.getElementById("wind-speed");
var apiKey = "6bc02efad81fd6e69c73b3f035eba587"

var city = document.getElementById("location");
console.log("CITY: ", city)

var country = "us"

function getCurrWeather (city) {

  var coordinatesURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey;
  
  fetch(coordinatesURL)
  
  .then(function (response) {
      console.log("RESPONSE: ", response);
      return response.json();
    })
    .then(function (data) {
      console.log("RESULT: ", data);
      temp.textContent = data.main.temp;
      humidity.textContent = data.main.humidity;
      conditions.textContent = data.weather[0].description;
      windSpeed.textContent = data.wind.speed;
      var lat = data.coord.lat;
      var lon = data.coord.lon;
      var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+apiKey;

      fetch(forecastUrl)
      .then (function(forecastResponse){
        console.log(forecastResponse);
        return forecastResponse.json();

      }) 
      .then(function(forecastData){
        console.log(forecastData);
      })


    });
}

  
   

btn.addEventListener("click", function (e) {
  e.preventDefault();
  var data = city.value;
  getCurrWeather(data)
  console.log("DATA: ", city.value)
})









