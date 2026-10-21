const convertToCelsius = function(f) {
  let celsius = ((f-32) / (9/5))
  return Math.round(celsius * 10)/ 10;

};

console.log(convertToCelsius(32));

const convertToFahrenheit = function(c) {
  let fahrenheit = (c * (9/5)) + 32;
  return Math.round(fahrenheit*10)/ 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
