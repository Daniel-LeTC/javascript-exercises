const leapYears = function(year) {
   
    if (year % 4 === 0 && year % 400 === 0 || year % 4 === 0 && year % 100 !== 0  ) {   //return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0); we can use return directly to output boolean, and we can group &&, || just like any other operators
        return true;
    } else return false;
   
};



// Do not edit below this line
module.exports = leapYears;
