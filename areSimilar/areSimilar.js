function areSimilar(arrOne, arrTwo) {
    let temp = 0;

    for(let i = 0; i < arrOne.length - 1; i++) {
        if(arrOne[i] !== arrTwo[i]) {
            temp = arrTwo[i];
            arrTwo[i] = arrTwo[i + 1]
            arrTwo[i + 1] = temp;
        }
        break;
        
    }
    
    let a = arrOne.toString();
    let b = arrTwo.toString();

    if(a === b) return true
    else return false;
    
}

// console.log(areSimilar([1, 2, 3], [1, 2, 3]));
// console.log(areSimilar([1, 2, 3], [2, 1, 3]));
// console.log(areSimilar([1, 2, 2], [2, 1, 1]));


module.exports = areSimilar;