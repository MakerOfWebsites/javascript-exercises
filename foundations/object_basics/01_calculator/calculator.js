const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((accumulator, item) => accumulator += item, 0);
};

const multiply = function(array) {
  return array.reduce((accumulator, item) => accumulator *= item, 1)
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(num) {
  let factorial = 1;

  for(let i = 1; i <= num; i++){
    factorial *= i;
  }
  
  return factorial;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
