const computeArray = require("./computeArray")


function arrayConversion(inputArr) {
    let isOdd = true;

    while(inputArr.length !== 1) {
        inputArr = computeArray(inputArr, isOdd);
        isOdd = !isOdd;
        
    }
    return inputArr[0];
}



// console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));




module.exports = arrayConversion;
