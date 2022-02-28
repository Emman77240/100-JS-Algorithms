function computeArray(arr, bool) {
    let newArr = [];
    if(bool) {     // if bool === true
        for(let i = 0; i < arr.length - 1; i += 2) {
            newArr.push(arr[i] + arr[i + 1]);
        }
    } else {       // if bool === false
        for(let i = 0; i < arr.length - 1; i += 2) {
            newArr.push(arr[i] * arr[i + 1]);
        }
    }

    return newArr;
}


module.exports = computeArray;