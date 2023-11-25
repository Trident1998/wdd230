const info = document.querySelector(".info");
const img = document.querySelector(".weather-img");
const p = document.querySelector(".weather-descr")

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=50.4500&lon=30.5230&units=imperial&appid=674f4e29a0f93bfda31fbafaf123ec0e';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=50.4500&lon=30.5230&units=imperial&appid=674f4e29a0f93bfda31fbafaf123ec0e';


async function apiFetch() {
    try {
    const response = await fetch(url);
    const forecastResponse = await fetch(forecastUrl);

    if (response.ok && forecastResponse.ok) {
        const data = await response.json();
        const forecastData = await forecastResponse.json();
        console.log(data);

        displayResults(data); 

        displayForecastResults(forecastData); 
    } else {
        throw Error(await response.text());
    }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    const temp = data.main.temp;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const description = data.weather[0].main;

    img.src = iconsrc;
    img.alt = data.weather[0].description;
    img.style.display = "inline";

    p.appendChild(document.createTextNode(`${temp}°F - ${description}`));
}

function displayForecastResults(data) {
    const today = new Date();
    const tommorow = new Date();
    const thirdDay = new Date();
    tommorow.setDate(today.getDate() + 1);
    thirdDay.setDate(thirdDay.getDate() + 3);


    const groupedByDate = getMapByDate(data);
    
    groupedByDate.forEach((value, key) => {
        console.log(`Date: ${key}`);
        console.log(value); // List of entities for that date
      });

}

function getMapByDate(data) {
    const groupedByDate = new Map();

    data.list.forEach(entity => {
    const dateTime = entity.dt_txt.split(' ');
    const date = dateTime[0];

    if (!groupedByDate.has(date)) {
        groupedByDate.set(date, []);
    }

    groupedByDate.get(date).push(entity);
    });

    return groupedByDate;
}

const getFormatedDate = (date) => {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

apiFetch();