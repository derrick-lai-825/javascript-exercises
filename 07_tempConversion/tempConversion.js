const ftoc = function(tempF) {
  let tempC = (5/9) * (tempF - 32)

  // Round the value to 1 decimal place
  let roundedTemp = Math.round(tempC * 10) / 10
  return roundedTemp
};

const ctof = function(tempC) {
  let tempF = ((9/5) * tempC) + 32

  // Round the value to 1 decimal place
  let roundedTemp = Math.round(tempF * 10) / 10
  return roundedTemp
};

/*
var number = 12.3456789
var rounded = Math.round(number * 10) / 10
*/

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
