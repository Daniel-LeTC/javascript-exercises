const convertToCelsius = function(fahrenheit) {

  let tempCelcius = (fahrenheit-32)*5/9;
  return Number(tempCelcius.toFixed(1));  //toFixed() methods round number to decided decimal but it convert the number into string, hence we should use number() function.
};

//console.log(convertToCelsius(125));

const convertToFahrenheit = function(celcius) {
  
  let tempFahrenheit = celcius * 9 / 5 + 32;
  return Number(tempFahrenheit.toFixed(1));
};

//console.log(convertToFahrenheit(51.67));

// Do not edit below this line

  module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
