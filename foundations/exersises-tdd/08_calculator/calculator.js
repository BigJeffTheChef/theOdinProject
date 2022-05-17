const add = function(addend1, addend2) {
	return parseInt(addend1) + parseInt(addend2);
};

const subtract = function(minuend, subtrahend) {
	return minuend - subtrahend;
};

const sum = function(arrayOfNumbers) {
  let total = 0;
  arrayOfNumbers.forEach((n) => total+=n);
  return total;
};

const multiply = function(arrayOfNumbers) {
  let result = 1;
  arrayOfNumbers.forEach(n => result *= n);
  return result;
};

const power = function(number, exponent) {
	return number ** exponent;
};

const factorial = function(number) {
	if (number === 0) {
    return 1;
  }
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact *= i;
  }
  return fact;
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
