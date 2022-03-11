const arrayPreviousLess = (arr) => {
    let newArr = [];
    newArr[0] = -1;

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > arr[i - 1]) newArr.push(arr[i - 1]);
        else newArr.push(-1);
    }

    return newArr;
}


// console.log(arrayPreviousLess([3, 5, 2, 4, 5]));



module.exports = arrayPreviousLess;