// Create a search bar cities
// Card display for current weather information
// Card display for 5 day forcast
// Search history that when clicked brings up the current weather info for selected city
// Take users input of city name and get coordinates with api call
// Extract weather data from api call and append to the appropriate spots in current weather
// Get a five day forcast for city input and append to 5 day forcast cards
// Store search history in local storage and append each search to a list under the search bar

var searchButton = document.querySelector('.search-btn');
var cityInput = document.querySelector('.city-input');
var APIKey = 'be3b0d12ee0e1ba5fd2df576d75ad5b5';

var getWeather = function(cityName, lat, lon) {
var forcastAPI = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;

fetch(forcastAPI)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    var uniqueForecastDays = [];
    var fiveDaysForecast = [];
    for (var i = 0; i  < data.list.length; i ++) {
        var forecast = data.list[i];
        var forecastDate = new Date(forecast.dt_txt).getDate();

        if(!uniqueForecastDays.includes(forecastDate)) {
            uniqueForecastDays.push(forecastDate);
            fiveDaysForecast.push(forecast);
        }
    }
    console.log(fiveDaysForecast);
    }) .catch(function() {
    alert("Error occured while fetching weather forcast!")
    });
};


var getCityCoordinates = function() {
    var cityName = cityInput.value.trim();
    if (!cityName) return;
    var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=" + APIKey;
    console.log(cityName)

    fetch(queryURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
        if(!data.length) return alert("No coordinates found for " + cityName + "!");
            var { name, lat, lon} = data[0];
            getWeather(name, lat, lon);
        
    }).catch(function() {
        alert("Can not get corridnates!")
  });
}
searchButton.addEventListener('click', getCityCoordinates);

// var fiveDaysForecast = data.list.filter(function(forecast) {
//     var forecastDate = new Date(forecast.dt_txt).getDate();
//     if(!uniqueForecastDays.includes(forecastDate)) {
//         return uniqueForecastDays.push(forecastDate);
//     }