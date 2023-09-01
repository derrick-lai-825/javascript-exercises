const removeFromArray = function(array, value) {
    // Remove the value from the array

    // Find the item and remove it.
    let index = array.indexOf(value)
    array.splice(index, 1)

    return array
};

// Do not edit below this line
module.exports = removeFromArray;
