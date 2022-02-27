function areSimilar(arrOne, arrTwo) {
    let sortedArrOne = arrOne.sort(); 
    let sortedArrTwo = arrTwo.sort();

    for(let i = 0; i < arrOne.length; i++) {
        if(sortedArrOne[i] !== sortedArrTwo[i]) return false;
        
    }

    return true;
    
}

// console.log(areSimilar([1, 2, 3], [1, 2, 3]));
// console.log(areSimilar([1, 2, 3], [2, 1, 3]));
// console.log(areSimilar([1, 2, 2], [2, 1, 1]));


module.exports = areSimilar;