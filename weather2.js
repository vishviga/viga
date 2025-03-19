// script.js

const apiKey = 'YOUR_API_KEY';  // Replace with your OpenWeatherMap API key

document.getElementById('search-button').addEventListener('click', function() {
  const city = document.getElementById('city-input').value;
  if (city) {
    getWeatherData(city);
  }
});

function getWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => displayWeather(data))
    .catch(error => {
      alert('Failed to fetch weather data. Please try again.');
    });
}

function displayWeather(data) {
  if (data.cod !== 200) {
    alert(data.message);
    return;
  }

  const weatherInfo = document.getElementById('weather-info');
  weatherInfo.innerHTML = `
    <p><strong>City:</strong> ${data.name}</p>
    <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
    <p><strong>Weather:</strong> ${data.weather[0].description}</p>
    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
  `;
}
