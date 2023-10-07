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
var city;
var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + APIKey;

var getCityCoordinates = function() {
    var cityName = cityInput.value.trim();
    if (!cityName) return;
    console.log(cityName)
}
searchButton.addEventListener('click', getCityCoordinates);

