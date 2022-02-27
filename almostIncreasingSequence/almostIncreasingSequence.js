function almostIncreasingSequence(inputArr) {
    let count = 0;
    let arrLen = inputArr.length;

    for(let i = 0; i < arrLen - 1; i++) {
        if(inputArr[i] > inputArr[i + 1]) {
            count++;
            let num = 0;
            for(let j = 0; j < arrLen; j++) {
                if(inputArr[i] === inputArr[j]) num++;
            }

            if(num > 2) return false;
        }
    }
    return count <= 1;

}

console.log(almostIncreasingSequence([1, 3, 2, 1]))

module.exports = almostIncreasingSequence;