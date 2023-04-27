var cityform = document.getElementById("citySelector");
var btn = document.getElementById("btn");
var temp = document.getElementById("temp");
var humidity = document.getElementById("humidity");
var windSpeed = document.getElementById("wind-speed");
var kelvin = 300;
var forecastDiv = document.getElementById("forecast");

var apiKey = "6bc02efad81fd6e69c73b3f035eba587"

var city = document.getElementById("location");
console.log("CITY: ", city)

var country = "us"

var temperature = document.getElementById("temperature");
var humid = document.getElementById("humid");
var windspeed = document.getElementById("windspeed");
var weatherConditions = document.getElementById("Weatherconditions");

function getCurrWeather(city) {


  var coordinatesURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;

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

      var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey;

      fetch(forecastUrl)
        .then(function (forecastResponse) {
          console.log(forecastResponse);
          return forecastResponse.json();

        })
        .then(function (forecastData) {
          console.log(forecastData)

          for (let i = 0; i < forecastData.list.length; i = i + 8) {
            const currentData = forecastData.list[i];
            const row = document.createElement("tr");

            const dateCell = document.createElement("td");
            dateCell.textContent = currentData.dt_txt;
            row.appendChild(dateCell);
            forecastDiv.appendChild(row);

            const tempCell = document.createElement("td");
            tempCell.textContent = currentData.main.temp;
            row.appendChild(tempCell);
            forecastDiv.appendChild(row);

            const condCell = document.createElement("td");
            condCell.textContent = currentData.weather[0].description;
            row.appendChild(condCell);
            forecastDiv.appendChild(row);

            const windSpeedCell = document.createElement("td");
            windSpeedCell.textContent = currentData.wind.speed;
            row.appendChild(windSpeedCell);
            forecastDiv.appendChild(row);

            const humidCell = document.createElement("td");
            humidCell.textContent = currentData.main.humidity;
            row.appendChild(humidCell);
            forecastDiv.appendChild(row);

             
          }
        })


    });

    
  }
  















btn.addEventListener("click", function (e) {
  e.preventDefault();
  var data = city.value;
  getCurrWeather(data)
  console.log("DATA: ", city.value)
})









