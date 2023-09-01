const fibonacci = function(n) {
    /*
        Obtain the nth fibbonacci number.
    */

    // Sanity check, if value is not a number, return ERROR
    let x = parseInt(n)
    if (!x) {
        return 'ERROR'
    }

    // Sanity check 2: Negative numbers aren't allowed
    if (x < 0) {
        return 'OOPS'
    }

    // Base Case: The first and second value is always 1
    if (x <= 2) {
        return 1
    }

    // Default numbers are always 1, 1
    let fibb = [1, 1]

    // Every value is the sum of the previous 2 values.
    for (let i = 2; i < x; i++) {
        const val1 = fibb[i - 2]
        const val2 = fibb[i - 1]
        fibb.push(val1 + val2)
    }

    // Return the last value
    return fibb.pop()
};

// Do not edit below this line
module.exports = fibonacci;
