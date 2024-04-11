const apiKey = '000aa9a74f8859e9a19b39a1923c85dc';
const city = 'Cozumel';
const countryCode = 'MX'; // Country code for Mexico
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=metric`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiKey}&units=metric`;

// Fetch current weather data
fetch(currentWeatherUrl)
    .then(response => response.json())
    .then(data => {
        // Display current temperature and humidity
        const currentWeather = document.getElementById('current-weather');
        currentWeather.innerHTML = `<p>Temperature: ${data.main.temp}°C</p>`;
        currentWeather.innerHTML += `<p>Humidity: ${data.main.humidity}%</p>`;
    })
    .catch(error => {
        console.error('Error fetching current weather data:', error);
        const message = document.getElementById('message');
        message.textContent = 'Error fetching current weather data.';
    });

    // Fetch current weather data
fetch(currentWeatherUrl)
.then(response => response.json())
.then(data => {
    // Display current temperature and humidity
    const currentWeather = document.getElementById('current-weather');
    currentWeather.innerHTML = `<p>Temperature: ${data.main.temp}°C</p>`;
    currentWeather.innerHTML += `<p>Humidity: ${data.main.humidity}%</p>`;
    
    // Display today's high temperature in the closeable message
    const tempMaxMessage = document.getElementById('temp-max-message');
    tempMaxMessage.style.display = 'block'; // Make the message visible
    document.getElementById('temp-max').textContent = data.main.temp_max; // Display today's high temperature
})
.catch(error => {
    console.error('Error fetching current weather data:', error);
    const message = document.getElementById('message');
    message.textContent = 'Error fetching current weather data.';
});

// Fetch forecast data
fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
        // Find the forecast for 15:00 (3:00pm) of the next day
        const nextDayForecast = data.list.find(item => {
            const forecastDate = new Date(item.dt * 1000);
            return forecastDate.getHours() === 15; // Check if the forecast is for 15:00
        });

        // Display next day's forecasted temperature
        const nextDayForecastElement = document.getElementById('next-day-forecast');
        if (nextDayForecast) {
            nextDayForecastElement.innerHTML = `<p>Next Day's Forecasted Temperature at 15:00: ${nextDayForecast.main.temp}°C</p>`;
        } else {
            nextDayForecastElement.innerHTML = `<p>No forecast data available.</p>`;
        }
    })
    .catch(error => {
        console.error('Error fetching forecast data:', error);
        const message = document.getElementById('message');
        message.textContent = 'Error fetching forecast data.';
    });
