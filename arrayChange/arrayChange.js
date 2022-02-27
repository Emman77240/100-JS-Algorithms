function arrayChange(inputArr) {
    let count = 0;

    for(let i = 0; i < inputArr.length - 1; i++) {
        if(inputArr[i] >= inputArr[i + 1]) {
            let difference = inputArr[i] + 1 - inputArr[i + 1];
            inputArr[i + 1] = inputArr[i] + 1;
            count += difference;
        }
    }
    return count;
}


// console.log(arrayChange([1, 1, 1]));



module.exports = arrayChange;