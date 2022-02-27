function alphabeticShift(str) {
    let strArr = str.split("");
    let alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newArr = [];
    for(let i = 0; i < strArr.length; i++) {
        for(let j = 0; j < alphabets.length; j++) {
            if(strArr[i] === alphabets[j]) {
                if(strArr[i] === "z") newArr.push("a")
                else if(strArr[i] === "Z") newArr.push("Z")
                else newArr.push(alphabets[j + 1]);
            }
        }
    }

    return newArr.join("");
}


// console.log(alphabeticShift("crazy"));

module.exports = alphabeticShift;