document.getElementById('submitBtn').addEventListener('click', function() {
    var city = document.getElementById('cityInput').value;
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=ee07e2bf337034f905cde0bdedae3db8';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(
            // afficher un message d'erreur
            function() {
                var weatherInfo = document.getElementById('weatherInfo');
                weatherInfo.innerHTML = ''; // Clear previous weather info

                var errorMessage = document.createElement('p');
                errorMessage.textContent = 'Ville inconnue';
                weatherInfo.appendChild(errorMessage);
            }
        );
});

function displayWeather(data) {
    console.log(data);
    var weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = ''; // Clear previous weather info

    var cityName = document.createElement('h2');
    // suppresion de "Arrondissement de"
    data.name = data.name.replace('Arrondissement de ', '');
    cityName.textContent = data.name + ' (' + data.sys.country + ')';
    weatherInfo.appendChild(cityName);

    var temperature = document.createElement('p');
    temperature.textContent = 'Température : ' + Math.round(data.main.temp - 273.15) + '°C';
    weatherInfo.appendChild(temperature);

    var weatherIcon = document.createElement('img');
    weatherIcon.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    weatherInfo.appendChild(weatherIcon);

    var wind = document.createElement('p');
    wind.textContent = 'Vent : ' + data.wind.speed + ' m/s';
    weatherInfo.appendChild(wind);

    var humidity = document.createElement('p');
    humidity.textContent = 'Humidité : ' + data.main.humidity + ' %';
    weatherInfo.appendChild(humidity);

    var pressure = document.createElement('p');
    pressure.textContent = 'Pression : ' + data.main.pressure + ' hPa';
    weatherInfo.appendChild(pressure);
}

