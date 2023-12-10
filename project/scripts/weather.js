const url = 'https://api.openweathermap.org/data/2.5/weather?lat=50.4500&lon=30.5230&units=imperial&appid=674f4e29a0f93bfda31fbafaf123ec0e';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=50.4500&lon=30.5230&units=imperial&appid=674f4e29a0f93bfda31fbafaf123ec0e';


async function getWeatherData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

async function displayCurrentWeather() {
    const weatherData = await getWeatherData();
    const currentWeather = document.querySelector('.current-weather');
    const currentTempElement = document.getElementById('current-temp');
    const currentDescriptionElement = document.getElementById('current-description');
    const currentHumiditylement = document.getElementById('current-humidity');
    const iconElement = document.createElement('img');
    iconElement.classList.add("current-icon");
  
    if (weatherData) {
      currentTempElement.textContent = `${weatherData.main.temp}°F`;
      currentDescriptionElement.textContent = weatherData.weather[0].description;
      currentHumiditylement.textContent = weatherData.main.humidity;
  
      const iconCode = weatherData.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
      iconElement.src = iconUrl;
      iconElement.alt = weatherData.weather[0].description;


      const h2Element = currentWeather.querySelector('h2');

      currentWeather.insertBefore(iconElement, h2Element.nextSibling);

    }
  }

async function displayForecastWithDetails() {
    try {
      const response = await fetch(forecastUrl);
      const data = await response.json();
      const forecastGrid = document.getElementById('forecast-grid');
  
      if (data && data.list) {
        const threeDayForecast = data.list.filter((item) => item.dt_txt.includes('12:00:00'));
        let i = 0;
  
        threeDayForecast.forEach((forecastItem) => {
            if(i < 1){
                const date = new Date(forecastItem.dt * 1000);
                const day = date.toLocaleDateString('en-US', { weekday: 'short' });
                const iconCode = forecastItem.weather[0].icon;
                const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
                const minTemp = forecastItem.main.temp_min;
                const maxTemp = forecastItem.main.temp_max;
        
                const forecastElement = document.createElement('div');
                forecastElement.classList.add('forecast-item');
        
                const iconElement = document.createElement('img');
                iconElement.classList.add("current-icon");
                iconElement.src = iconUrl;
                iconElement.alt = forecastItem.weather[0].description;
        
                const dataElement = document.createElement('div');
                dataElement.classList.add('forecast-data');
                dataElement.innerHTML = `<p>${minTemp}°F / ${maxTemp}°F</p><p>${day}</p>`;
        
                forecastElement.appendChild(iconElement);
                forecastElement.appendChild(dataElement);
                forecastGrid.appendChild(forecastElement);
                i++;
            
            }
          
        });
      }
    } catch (error) {
      console.error('Error fetching forecast:', error);
    }
  }
  
displayCurrentWeather();
displayForecastWithDetails();
