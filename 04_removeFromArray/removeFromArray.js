const removeFromArray = function(array, value) {
    // Remove the value from the array

    // Go through each argument (ignoring the first one, which is the array)
    for (let i = 1; i < arguments.length; i++){
        
        //console.log(arguments[i])
        // Find the item and remove it.
        let index = array.indexOf(arguments[i])
        // indexOf returns -1, if nothing is found, not nil
        if (index != -1) {
            array.splice(index, 1)
        }
    }

    return array
};

// Do not edit below this line
module.exports = removeFromArray;
