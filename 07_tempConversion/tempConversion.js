const convertToCelsius = function(fahrenheit) {

  let tempCelcius = (fahrenheit-32)*5/9;
  return Number(tempCelcius.toFixed(1));  //toFixed() methods round number to decided decimal but it convert the number into string, hence we should use number() function.
};

//console.log(convertToCelsius(125));

const convertToFahrenheit = function(celcius) {
  
  let tempFahrenheit = celcius * 9 / 5 + 32;
  return Number(tempFahrenheit.toFixed(1)); // Another option is that we can use math.round(number * 10) / 10, because math.round will output integer only so we time 10 and devide to 10 in order to return the 1 decimal format
};                                          // For ex: number is 10.3456, we want 10.3. When we applied above the output will be 103 for math.round, then devide to 10 we got 10.3 as what we wanted.

//console.log(convertToFahrenheit(51.67));

// Do not edit below this line

  module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
