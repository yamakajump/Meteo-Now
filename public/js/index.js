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
    // suppresion de "Arrondissement de"
    data.name = data.name.replace('Arrondissement de ', '');
    cityName.textContent = data.name;
    weatherInfo.appendChild(cityName);

    var temperature = document.createElement('p');
    temperature.textContent = 'Température : ' + Math.round(data.main.temp - 273.15) + '°C';
    weatherInfo.appendChild(temperature);

    var weatherIcon = document.createElement('img');
    weatherIcon.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    weatherInfo.appendChild(weatherIcon);

    // Add more weather details as needed
}

