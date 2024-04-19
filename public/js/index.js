$('#submitBtn').click(function() {
    var city = $('#cityInput').val();
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=ee07e2bf337034f905cde0bdedae3db8';

    $.ajax({
        url: url,
        type: 'GET',
        success: function(data) {
            displayWeather(data);
        },
        error: function() {
            var weatherInfo = $('#weatherInfo');
            weatherInfo.empty(); // Clear previous weather info

            var errorMessage = $('<p>').text('Ville inconnue');
            weatherInfo.append(errorMessage);
        }
    });
});

function displayWeather(data) {
    console.log(data);
    var weatherInfo = $('#weatherInfo');
    weatherInfo.empty(); // Clear previous weather info

    var cityName = $('<h2>').text(data.name + ' (' + data.sys.country + ')');
    weatherInfo.append(cityName);

<<<<<<< HEAD
    var weatherIcon = $('<img>').attr('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png');
    weatherInfo.append(weatherIcon);
=======
    var weatherIcon = document.createElement('img');
    weatherIcon.src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    weatherInfo.appendChild(weatherIcon);
    // augmenter la taille de l'icone
    weatherIcon.style.width = '90px';
>>>>>>> 13f74002430dcba97cb384ea501e11b5b23b0080

    var temperature = $('<p>').text('Température : ' + Math.round(data.main.temp - 273.15) + '°C');
    weatherInfo.append(temperature);

    var wind = $('<p>').text('Vent : ' + data.wind.speed + ' m/s');
    weatherInfo.append(wind);

    var humidity = $('<p>').text('Humidité : ' + data.main.humidity + ' %');
    weatherInfo.append(humidity);

    var pressure = $('<p>').text('Pression : ' + data.main.pressure + ' hPa');
    weatherInfo.append(pressure);
}
