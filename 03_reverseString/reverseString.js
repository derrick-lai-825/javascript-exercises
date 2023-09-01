const reverseString = function(string) {
    // Solution 1: Loop, but backwards
    // let reversed = ''
    // for (let i = string.length; i > 0; i--) {
    //     reversed += string[i - 1]
    // }

    // return reversed

    // Solution 2: Built in methods

    // Split, reverse, and rejoin
    let splitted = string.split("")
    let reversed = splitted.reverse()
    let joined = reversed.join("")
    return joined

};

// Do not edit below this line
module.exports = reverseString;
