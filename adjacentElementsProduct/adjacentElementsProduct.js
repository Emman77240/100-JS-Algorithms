function adjacentElementsProduct(inputArray) {
    let num = inputArray[0] * inputArray[1];
    let len = inputArray.length;

    for(let i = 0; i < len - 1; i++) {
        if(inputArray[i] * inputArray[i + 1] > num) {
            num = inputArray[i] * inputArray[i + 1];
            
        }
    }
    return num;
}

// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));

module.exports =adjacentElementsProduct;