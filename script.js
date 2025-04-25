const API_KEY = '8262bac160fc67c0f244da2f902f83d9';
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const locationBtn = document.getElementById('locationBtn');
const celsiusBtn = document.getElementById('celsiusBtn');
const fahrenheitBtn = document.getElementById('fahrenheitBtn');
const currentWeather = document.getElementById('currentWeather');
const forecast = document.getElementById('forecast');

let units = 'metric';

// Event Listeners
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeatherByCity(city);
    }
});

// Celsius Button
celsiusBtn.addEventListener('click', () => {
    if (units !== 'metric') {
        units = 'metric';
        celsiusBtn.classList.add('active');
        fahrenheitBtn.classList.remove('active');
        
        if (cityInput.value.trim()) {
            getWeatherByCity(cityInput.value.trim());
        }
    }
});

// Fahrenheit Button
fahrenheitBtn.addEventListener('click', () => {
    if (units !== 'imperial') {
        units = 'imperial';
        fahrenheitBtn.classList.add('active');
        celsiusBtn.classList.remove('active');
        
        if (cityInput.value.trim()) {
            getWeatherByCity(cityInput.value.trim());
        }
    }
});

// Get Weather By City
async function getWeatherByCity(city) {
    try {
        // Current Weather
        const currentResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${API_KEY}`
        );
        const currentData = await currentResponse.json();
        
        if (currentData.cod === '404') {
            alert('City not found');
            return;
        }
        
        displayCurrentWeather(currentData);
        
        // 5-day Forecast
        const forecastResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${API_KEY}`
        );
        const forecastData = await forecastResponse.json();
        displayForecast(forecastData);
    } catch (error) {
        console.error('Error:', error);
        alert('Error fetching weather data');
    }
}


function displayCurrentWeather(data) {
    const tempUnit = units === 'metric' ? '°C' : '°F';
    const windUnit = units === 'metric' ? 'm/s' : 'mph';
    
    currentWeather.querySelector('.city-name').textContent = `${data.name}, ${data.sys.country}`;
    currentWeather.querySelector('.weather-icon').innerHTML = 
        `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">`;
    currentWeather.querySelector('.temperature').textContent = `${Math.round(data.main.temp)}${tempUnit}`;
    currentWeather.querySelector('.description').textContent = data.weather[0].description;
    currentWeather.querySelector('.humidity').textContent = `Humidity: ${data.main.humidity}%`;
    currentWeather.querySelector('.wind').textContent = `Wind: ${data.wind.speed} ${windUnit}`;
}

function displayForecast(data) {
    const tempUnit = units === 'metric' ? '°C' : '°F';
    
    // One Forecast Per Day
    const dailyForecasts = {};
    data.list.forEach(item => {
        const date = new Date(item.dt * 1000).toLocaleDateString();
        if (!dailyForecasts[date] && Object.keys(dailyForecasts).length < 5) {
            dailyForecasts[date] = item;
        }
    });
    
    // All Forecast Day Elements
    const forecastDays = document.querySelectorAll('.forecast-day');
    
    // hide all forecast cards initially
    forecastDays.forEach(day => day.style.display = 'none');
    
    // Update and Show Forecast Cards
    Object.values(dailyForecasts).forEach((item, index) => {
        if (index < forecastDays.length) {
            const forecastDay = forecastDays[index];
            const date = new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
            
            forecastDay.querySelector('.forecast-date').textContent = date;
            forecastDay.querySelector('img').src = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
            forecastDay.querySelector('img').alt = item.weather[0].description;
            forecastDay.querySelector('.forecast-temp').textContent = `${Math.round(item.main.temp)}${tempUnit}`;
            forecastDay.querySelector('.forecast-desc').textContent = item.weather[0].description;
            
            forecastDay.style.display = 'block';
        }
    });
}