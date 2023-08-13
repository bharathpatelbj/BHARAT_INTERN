function convertTemperature() {
      var celsius = document.getElementById("celsius").value;
      var fahrenheit = document.getElementById("fahrenheit").value;
      var kelvin = document.getElementById("kelvin").value;
      var result = document.getElementById("result");

      if (celsius !== "") {
        var fahrenheitValue = (parseFloat(celsius) * 9/5) + 32;
        var kelvinValue = parseFloat(celsius) + 273.15;
        result.innerHTML = "Fahrenheit: " + fahrenheitValue.toFixed(2) + "°F<br>" +
                           "Kelvin: " + kelvinValue.toFixed(2) + "K";
      } else if (fahrenheit !== "") {
        var celsiusValue = (parseFloat(fahrenheit) - 32) * 5/9;
        var kelvinValue = (parseFloat(fahrenheit) - 32) * 5/9 + 273.15;
        result.innerHTML = "Celsius: " + celsiusValue.toFixed(2) + "°C<br>" +
                           "Kelvin: " + kelvinValue.toFixed(2) + "K";
      } else if (kelvin !== "") {
        var celsiusValue = parseFloat(kelvin) - 273.15;
        var fahrenheitValue = (parseFloat(kelvin) - 273.15) * 9/5 + 32;
        result.innerHTML = "Celsius: " + celsiusValue.toFixed(2) + "°C<br>" +
                           "Fahrenheit: " + fahrenheitValue.toFixed(2) + "°F";
      } else {
        result.innerHTML = "Please enter a temperature value.";
      }
    }