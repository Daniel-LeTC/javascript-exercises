const repeatString = function(inPut,num) {
   if (num<0) {
    return "ERROR";
   } 
    let string="";
    for (let i = 1; i<=num; i++) {
        
        string += inPut; 
    }   
   return string;     

};



// Do not edit below this line
module.exports = repeatString;
