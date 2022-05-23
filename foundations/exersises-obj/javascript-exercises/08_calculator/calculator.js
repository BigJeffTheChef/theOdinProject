const add = function(addend1, addend2) {
	return parseFloat(addend1) + parseFloat(addend2);
};

const subtract = function(minuend, subtrahend) {
	return minuend - subtrahend;
};

const sum = function(numArray) {
	if (numArray.length === 0) return 0;
  return numArray.reduce((total, element) => total += element, 0);
};

const multiply = function(numArray) {
  return numArray.reduce((total, element) => total *= element);
};

const power = function(number, exponent) {
	return number ** exponent;
};

const factorial = function(integer) {
  if (integer <= 1) {
    return 1;
  }
  return factorial(integer -1) * integer;
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
