function alternatingSums(numArr) {
    let arrSum = [0, 0]
    
    for(let i = 0; i < numArr.length; i++) {
        if(i % 2 == 0) arrSum[0] += numArr[i]
        else arrSum[1] += numArr[i]
    }
    return arrSum
}


// console.log(alternatingSums([50, 60, 60, 45, 70]))



module.exports = alternatingSums