const palindromes = function (word) {

    // Strip out all non letter characters
    cleanStr = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Reverse the string
    reversedStr = cleanStr.split('').reverse().join('')

    // Return whether if the string equals
    return (cleanStr == reversedStr)
};

// Do not edit below this line
module.exports = palindromes;
