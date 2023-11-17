const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.7561&lon=6.6415&units=imperial&appid=674f4e29a0f93bfda31fbafaf123ec0e';

async function apiFetch() {
    try {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data); 
    } else {
        throw Error(await response.text());
    }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('day', iconsrc);
    weatherIcon.setAttribute('night', iconsrc);
    captionDesc.textContent = `${desc}`;
  }

apiFetch();