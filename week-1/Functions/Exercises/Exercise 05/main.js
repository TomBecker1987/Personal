const numInArray = function(numToCheck,arrayToCheck) {
    let isNumInArray = false
    for ( let num of arrayToCheck ) {
        if (num == numToCheck) {
            isNumInArray = true
        }
    }
    return isNumInArray
}

let list = [1,2,3,4,5,6,7,8,9]
let number = 1

console.log(numInArray(number,list))