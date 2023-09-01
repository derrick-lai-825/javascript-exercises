const add = function(x, y) {
	return x + y
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(valArray) {
	let total = 0
  for (let i = 0; i < valArray.length; i++) {
    total += valArray[i]
  }

  return total
};

const multiply = function(valArray) {
  let product = 1
  for (let i = 0; i < valArray.length; i++) {
    product *= valArray[i]
  }

  return product
};

const power = function(x, y) {
	return x ** y
};

const factorial = function(x) {

  // Special case: If 0, then it is 1
  if (x == 0) {
    return 1;
  }

  let total = x;
  for (let i = x - 1; i > 0; i--) {
    total *= i
  }

  return total
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
