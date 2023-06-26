const removeFromArray = function(myArr,removedElement) { // The idea is find the index of the removed element in the array, then remove it from array
    let myNewArr;
    let index = myArr.indexOf(removedElement); // This is how we index the required value needs to be removed
    if (index<0) {
        return "ERROR, ELEMENT NOT FOUND IN ARRAY";
    } else {
        myNewArr = myArr.slice(0,index).concat(myArr.slice(index+1)); // Because the nature of slice(start,end) (show arr from start to end -1 index) || slice (start) (show from start of index to end array), we must use concat to assemble our original array
    };
    return myNewArr;

};    

console.log (removeFromArray([1,2,3,4],5));

// Do not edit below this line
module.exports = removeFromArray;
