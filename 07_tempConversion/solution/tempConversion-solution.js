const convertToCelsius = function (fahrenheit) {
  return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

console.log (convertToCelsius(125));

const convertToFahrenheit = function (celsius) {
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};

console.log (convertToFahrenheit(51.7));

module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
