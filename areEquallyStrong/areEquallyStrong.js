function areEquallyStrong(a1, a2, b1, b2) {
    if(a1 === b1 || a1 === b2) {
        if(a2 === b1 || a2 == b2) return true;
        else return false;
    }
    else return false;
}

// console.log(areEquallyStrong(10, 15, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 9))


module.exports = areEquallyStrong;