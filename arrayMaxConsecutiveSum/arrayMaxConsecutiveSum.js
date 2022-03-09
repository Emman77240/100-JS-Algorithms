function arrayMaxConsecutiveSum(arr, count) {
    let newArr = []

    for(let i = 0; i < arr.length - count; i++) {
        let num = 0;
        for(let j = 0; j < count; j++) {
            num += arr[i + j];
        }
        newArr.push(num);
    }

    let max = 0;

    newArr.forEach((n) => {
        if(n > max) {
            max = n;
        }
    })

    return max;
}


// console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2))


module.exports = arrayMaxConsecutiveSum;