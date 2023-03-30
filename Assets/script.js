
let searchHistory = []
let lastCitySearched = ""

let getCityWeather = function(city) {
    
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ce39e7239416ad754359ca762d28521a&units=imperial";

    fetch(apiUrl)

    .then(function(response) {
        
            if (response.ok) {
                response.json().then(function(data) {
                    displayWeather(data);
                });
            
            } else {
                alert("Error: " + response.statusText);
            }
        })  

        .catch(function(error) {
            alert("Unable to connect to OpenWeather");
        })
};

let searchSubmitHandler = function(event) {
    
    event.preventDefault();

    
    let cityName = $("#cityname").val().trim();

    
    if(cityName) {
        
        getCityWeather(cityName);

    
        $("#cityname").val("");
    } else {
        
        alert("Please enter a city name");
    }
};


let displayWeather = function(weatherData) {


