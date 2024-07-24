function convertTemperature() {
    const tempInput = document.getElementById('temperatureInput').value;
    const unitInput = document.getElementById('unitInput').value;
    const resultDiv = document.getElementById('result');
    
    if (isNaN(tempInput) || tempInput === '') {
        resultDiv.innerHTML = 'Please enter a valid number!';
        return;
    }

    const temperature = parseFloat(tempInput);
    let convertedTemperature, unit;

    if (unitInput === 'celsius') {
        convertedTemperature = (temperature * 9/5) + 32;
        unit = 'Fahrenheit';
        const kelvin = temperature + 273.15;
        resultDiv.innerHTML = `${temperature} °C = ${convertedTemperature.toFixed(2)} °F <br> ${temperature} °C = ${kelvin.toFixed(2)} K`;
    } else if (unitInput === 'fahrenheit') {
        convertedTemperature = (temperature - 32) * 5/9;
        unit = 'Celsius';
        const kelvin = (temperature - 32) * 5/9 + 273.15;
        resultDiv.innerHTML = `${temperature} °F = ${convertedTemperature.toFixed(2)} °C <br> ${temperature} °F = ${kelvin.toFixed(2)} K`;
    } else if (unitInput === 'kelvin') {
        convertedTemperature = temperature - 273.15;
        unit = 'Celsius';
        const fahrenheit = (temperature - 273.15) * 9/5 + 32;
        resultDiv.innerHTML = `${temperature} K = ${convertedTemperature.toFixed(2)} °C <br> ${temperature} K = ${fahrenheit.toFixed(2)} °F`;
    }
}
