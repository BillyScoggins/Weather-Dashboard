var cityform = document.getElementById("citySelector");
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
  
cityform.addEventListener("submit", function(event){
  event.preventDefault();
  console.log(event);
})   
fetch('https://api.openweathermap.org/data/2.5/weather?q=Dallas&appid=6bc02efad81fd6e69c73b3f035eba587&units=metric')
  .then(response => response.json())
  .then(data => console.log(data));

  fetch('https://api.openweathermap.org/data/2.5/weather?q=Dallas&appid=6bc02efad81fd6e69c73b3f035eba587&units=metric')
  .then(response => response.json())
  .then(data => {
    const weatherData = {
      temperature: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon
    };
    console.log(weatherData);
  });

  fetch('https://api.openweathermap.org/data/2.5/weather?q=Dallas&appid=6bc02efad81fd6e69c73b3f035eba587&units=metric')
  .then(response => response.json())
  .then(data => {
    const weatherData = {
      temperature: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon
    };
    document.getElementById('temperature').textContent = weatherData.temperature;
    document.getElementById('description').textContent = weatherData.description;
    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/w/${weatherData.icon}.png`);
  });