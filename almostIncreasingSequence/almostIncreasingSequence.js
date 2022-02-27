function almostIncreasingSequence(inputArr) {
    let count = 0

    for(let i = 0; i < inputArr.length - 1; i++) {
        if(inputArr[i] > inputArr[i + 1]) count++;
    
    }
    return count + 1 === inputArr.length? true : false;

}

// console.log(almostIncreasingSequence([1, 3, 2, 1]))

module.exports = almostIncreasingSequence;