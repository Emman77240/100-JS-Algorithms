function allLongestStrings(arrayInput) {
    let largestStr = 0;
    let arrLen = arrayInput.length;
    let newArr = []

    for(let i = 0; i < arrLen; i++) {
        let len = arrayInput[i].length;

        largestStr = len > largestStr? len : largestStr;
    }

    arrayInput.forEach((str) => {
        if(str.length === largestStr) newArr.push(str);
    })

    return newArr;
}

// console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]))

module.exports = allLongestStrings;