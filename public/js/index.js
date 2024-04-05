document.getElementById('submitBtn').addEventListener('click', function() {
    var city = document.getElementById('cityInput').value;
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=ee07e2bf337034f905cde0bdedae3db8';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => console.log('Erreur :', error));
});

function displayWeather(data) {
    var weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = ''; // Clear previous weather info

    var cityName = document.createElement('h2');
    cityName.textContent = data.name;
    weatherInfo.appendChild(cityName);

    var weatherDescription = document.createElement('p');
    weatherDescription.textContent = data.weather[0].description;
    weatherInfo.appendChild(weatherDescription);

    var temperature = document.createElement('p');
    temperature.textContent = 'Température : ' + Math.round(data.main.temp - 273.15) + '°C';
    weatherInfo.appendChild(temperature);

    // Add more weather details as needed
}
