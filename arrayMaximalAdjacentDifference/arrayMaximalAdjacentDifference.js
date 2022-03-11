function arrayMaximalAdjacentDifference(arr) {
    let absVal = 0;

    for(let i = 0; i < arr.length - 1; i++) {
        let num = 0;
        num += Math.abs((arr[i] - arr[i + 1]));

        if(num > absVal) absVal = num;
    }

    return absVal;
}


// console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
// console.log(arrayMaximalAdjacentDifference([2, 9, 1, 0]));



module.exports = arrayMaximalAdjacentDifference;