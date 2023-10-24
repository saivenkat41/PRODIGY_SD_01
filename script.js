function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const result = document.getElementById("result");

    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    if (isNaN(temperature)) {
        result.innerHTML = "Please enter a valid temperature.";
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (unit === "celsius") {
        celsius = temperature;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
    } else if (unit === "fahrenheit") {
        fahrenheit = temperature;
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = (fahrenheit - 32) * 5/9 + 273.15;
    } else {
        kelvin = temperature;
        celsius = kelvin - 273.15;
        fahrenheit = (kelvin - 273.15) * 9/5 + 32;
    }

    result.innerHTML = `Temperature Conversion Results:<br>
        Celsius: ${celsius.toFixed(2)}<br>
        Fahrenheit: ${fahrenheit.toFixed(2)}<br>
        Kelvin: ${kelvin.toFixed(2)}`;
}
