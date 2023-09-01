const sumAll = function(start, end) {

    // Sanity checks, if the values aren't numbers or are negative, return error.
    if ((typeof(start) != 'number') || (typeof(end) != 'number')) {
        return "ERROR";
    } else if ((start < 0) || (end < 0)) {
        return "ERROR"
    }
    // Loop through in between every number till the last and add them up.
    // Determine operation based on whichever value is larger
    let sum = 0
    // Determine conditions
    let starting = (((start > end) && end) || start);
    let ending = (((start > end) && start) || end)
    for (let i = starting; i <= ending; i++) {
        sum += i
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
