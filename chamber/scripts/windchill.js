function calculateWindChill(temperature, windspeed) {
    if (temperature <= 50 && windspeed > 3.0) {
        var windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temperature * Math.pow(windspeed, 0.16));
        return windChill.toFixed(2); 
    } else {
        return "N/A";
    }
}

var temperatureValue = parseFloat(document.getElementById('tempValue').textContent);
var windSpeedValue = parseFloat(document.getElementById('windValue').textContent);

var windChillValue = calculateWindChill(temperatureValue, windSpeedValue);

document.getElementById('windchillValue').textContent = windChillValue;
