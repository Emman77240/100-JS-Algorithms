function alphabetSubsequence(str) {
    let num = 0;
    let strArr = str.split("");
    
    for(let i = 0; i < strArr.length - 1; i++) {
        if(strArr[i] < strArr[i + 1]) num++;
    }

    return num + 1 === str.length? true : false;
}

//console.log(alphabetSubsequence("effg"))
//console.log(alphabetSubsequence("aceg"))


module.exports = alphabetSubsequence;