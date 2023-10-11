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
var currentCity = document.getElementById('city-name');

var APIKey = 'be3b0d12ee0e1ba5fd2df576d75ad5b5';
var uniqueForecastDays = [];
var fiveDaysForecast = [];



getCurrentWeather = function(cityName, lat, lon) {
    var today = dayjs();
    var currentForecastAPI = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&units=imperial";
    fetch(currentForecastAPI)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        if(data) {
            var currentDate = document.getElementById('current-date');
            currentDate.innerHTML = today.format('MMM D, YYYY')
            console.log(data)
            var currentTemp = document.getElementById('current-temp');
            currentTemp.innerHTML = 'Temp: ' + data.main.temp + '°F';
            var currentWind = document.getElementById('current-wind');
            currentWind.innerHTML = 'Wind: ' + data.wind.speed + 'M/S';
            var currentHumidity = document.getElementById('current-humidity');
            currentHumidity.innerHTML = 'Humidity ' + data.main.humidity + '%';
            var currentImg = document.getElementById('current-image');
            currentImg.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
        }
    })
}




get5DayWeather = function(cityName, lat, lon) {
    uniqueForecastDays = [];
    fiveDaysForecast = [];

    var forcastAPI = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&units=imperial";
 console.log(lat, lon)
fetch(forcastAPI)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    for (var i = 0; i  < data.list.length; i ++) {
        var forecast = data.list[i];
        var forecastDate = new Date(forecast.dt_txt).getDate();

        if(!uniqueForecastDays.includes(forecastDate)) {
            uniqueForecastDays.push(forecastDate);
            fiveDaysForecast.push(forecast);

            console.log(forecast.dt_txt);
        }
        if(fiveDaysForecast.length > 0) {
            var date1 = document.getElementById('date1');
            date1.innerHTML = fiveDaysForecast[0].dt_txt;
            var img1 = document.getElementById('img1');
            img1.src = "https://openweathermap.org/img/wn/" + fiveDaysForecast[0].weather[0].icon + "@2x.png"
            console.log(fiveDaysForecast[0].weather[0].icon)
            var temp1 = document.getElementById('temp1');
            temp1.innerHTML = 'Temp: ' + fiveDaysForecast[0].main.temp + '°F';
            var wind1 = document.getElementById('wind1');
            wind1.innerHTML = 'Wind: ' +  fiveDaysForecast[0].wind.speed + ' ' + 'M/S';
            var humidity1 = document.getElementById('humidity1');
            humidity1.innerHTML = 'Humidity: ' +  fiveDaysForecast[0].main.humidity + ' ' + '%';
            console.log(img1)
        }
        if(fiveDaysForecast.length > 1) {
            console.log(fiveDaysForecast[1])

            var date2 = document.getElementById('date2');
            date2.innerHTML = fiveDaysForecast[1].dt_txt;
            var img2 = document.getElementById('img2');
            img2.src = "https://openweathermap.org/img/wn/" + fiveDaysForecast[1].weather[0].icon + "@2x.png"
            console.log(fiveDaysForecast[1].weather[0].icon)
            var temp2 = document.getElementById('temp2');
            temp2.innerHTML = 'Temp: ' + fiveDaysForecast[1].main.temp + '°F';
            var wind2 = document.getElementById('wind2');
            wind2.innerHTML = 'Wind: ' + fiveDaysForecast[1].wind.speed + ' ' + 'M/S';
            var humidity2 = document.getElementById('humidity2');
            humidity2.innerHTML = 'Humidity: ' + fiveDaysForecast[1].main.humidity + ' ' + '%';
        }
          if(fiveDaysForecast.length > 2) {  
            var date3 = document.getElementById('date3');
            date3.innerHTML = fiveDaysForecast[2].dt_txt;
            var img3 = document.getElementById('img3');
            img3.src = "https://openweathermap.org/img/wn/" + fiveDaysForecast[2].weather[0].icon + "@2x.png"
            console.log(fiveDaysForecast[2].weather[0].icon)
            var temp3 = document.getElementById('temp3');
            temp3.innerHTML = 'Temp: ' +  fiveDaysForecast[2].main.temp + '°F';
            var wind3 = document.getElementById('wind3');
            wind3.innerHTML = 'Wind: ' +  fiveDaysForecast[2].wind.speed + ' ' + 'M/S';
            var humidity3 = document.getElementById('humidity3');
            humidity3.innerHTML = 'Humidity: ' +  fiveDaysForecast[2].main.humidity + ' ' + '%';
          }
            if(fiveDaysForecast.length > 3) {
            var date4 = document.getElementById('date4');
            date4.innerHTML = fiveDaysForecast[3].dt_txt;
            var img4 = document.getElementById('img4');
            img4.src = "https://openweathermap.org/img/wn/" + fiveDaysForecast[3].weather[0].icon + "@2x.png"
            console.log(fiveDaysForecast[3].weather[0].icon)
            var temp4 = document.getElementById('temp4');
            temp4.innerHTML = 'Temp: ' +  fiveDaysForecast[3].main.temp + '°F';
            var wind4 = document.getElementById('wind4');
            wind4.innerHTML = 'Wind: ' +  fiveDaysForecast[3].wind.speed + ' ' + 'M/S';
            var humidity4 = document.getElementById('humidity4');
            humidity4.innerHTML = 'Humidity: ' +  fiveDaysForecast[3].main.humidity + ' ' + '%';
            }
            if(fiveDaysForecast.length > 4) {
            var date5 = document.getElementById('date5');
            date5.innerHTML = fiveDaysForecast[4].dt_txt;
            var img5 = document.getElementById('img4');
            img5.src = "https://openweathermap.org/img/wn/" + fiveDaysForecast[4].weather[0].icon + "@2x.png"
            console.log(fiveDaysForecast[4].weather[0].icon)
            var temp5 = document.getElementById('temp5');
            temp5.innerHTML = 'Temp: ' +  fiveDaysForecast[4].main.temp + '°F';
            var wind5 = document.getElementById('wind5');
            wind5.innerHTML = 'Wind: ' +  fiveDaysForecast[4].wind.speed + ' ' + 'M/S';
            var humidity5 = document.getElementById('humidity5');
            humidity5.innerHTML = 'Humidity: ' +  fiveDaysForecast[4].main.humidity + ' ' + '%';
            }      
    }
    }) .catch(function() {
    alert("Error occured while fetching weather forcast!")
    });
};

var getCityCoordinates = function() {
    var cityName = cityInput.value.trim();
    if (!cityName) return;
    var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=" + APIKey;


    fetch(queryURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
        if(!data.length) return alert("No coordinates found for " + cityName + "!");
            var { name, lat, lon} = data[0];
            get5DayWeather(name, lat, lon);
            currentCity.innerHTML = data[0].name
            getCurrentWeather(name, lat, lon);
            localStorage.setItem('cityData', JSON.stringify({name, lat, lon}));
            var cityData = JSON.parse(localStorage.getItem('cityData'));
            if(cityData) {
                var divEl = document.getElementById('search-history');
                var button = document.createElement('button');
                button.textContent = cityData.name;
                button.onclick = function() {
                    get5DayWeather(cityData.name, cityData.lat, cityData.lon);
                    getCurrentWeather(cityData.name, cityData.lat, cityData.lon);
                };
                divEl.appendChild(button);
            };
            
            
    }).catch(function() {
        alert("Can not get corridnates!")
  });
}
searchButton.addEventListener('click', getCityCoordinates,)
    

