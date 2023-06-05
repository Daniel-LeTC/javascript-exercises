const reverseString = function(word) {
    let myArr = word.split(""); //split the string into array for easiser order arrangement by using the split seperator with an empty string ""
    let myReverseArr = myArr.reverse(); //reverse the original array
    let mirror = myReverseArr.join(""); // Join the reversed array by using the Join Method with the seperator is an empty string ""
    
    return mirror;
    

};


// Do not edit below this line
module.exports = reverseString;
