
let numStart;
let numEnd;

const sumAll = function(num1, num2) {
    
    if (typeof num1 != "number" || typeof num2 != "number" || num1 < 0 || num2 < 0) {
        return "ERROR"
    } else if (num1<num2) {
        numStart = num1; // I cannot put num1 = numStart, learn more
        numEnd = num2;
    } else {
        numStart = num2;
        numEnd = num1;
    }

    console.log ("numstart =",numStart);
    console.log ("numend =",numEnd);   
    
    let sumTotal = 0;
        for (let i=numStart;i <= numEnd; i++) {
            sumTotal = sumTotal + i;
    
        }

    return sumTotal;
};




// Do not edit below this line
module.exports = sumAll;