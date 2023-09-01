const sumAll = function(start, end) {

    // Loop through in between every number till the last and add them up.
    let sum = 0
    for (let i = start; i <= end; i++) {
        sum += i
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
