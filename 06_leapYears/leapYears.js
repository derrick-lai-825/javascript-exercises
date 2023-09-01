const leapYears = function(year) {
    /*
        This uses conditionals.
        Rules:
        - Leap years are divisble by 4
        - However, if they are divisible by 100, they must also be divisible by 400 to be leap years.
    */

    // Check if first condition is satisfied (divisible by 4)
    // Solution 1
    // if ((year % 4) == 0) {
    //     // Edge case, it is divisible by 100, but not divisible by 400, then return false.
    //     if ((year % 100 == 0) && ((year % 400) != 0)) {
    //         return false
    //     }

    //     return true
    // }

    // return false

    // Optimzation Or Shortened Code: Solution 2
    // It Is A Leap Year If (Divisible By 4 And Not Divisible By 100) or (Divisible By 4 or Divisible By 400)
    return ((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0)))
};

// Do not edit below this line
module.exports = leapYears;
