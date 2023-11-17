const info = document.querySelector(".info");
const img = document.querySelector(".weather-img");
const p = document.querySelector(".weather-descr")

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=50.4500&lon=30.5230&units=imperial&appid=674f4e29a0f93bfda31fbafaf123ec0e';


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
    const temp = data.main.temp;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const description = data.weather[0].main;

    img.src = iconsrc;
    img.alt = data.weather[0].description;
    img.style.display = "inline";

    p.appendChild(document.createTextNode(`${temp}°F - ${description}`));
}

apiFetch();