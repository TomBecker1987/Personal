const isEven = function(numToCheck) {
    if (numToCheck % 2 == 0) {
        return true
    }
    else {
        return false
    }
}


const oddNums = function(numList) {
    for ( let num of numList ) {
        if ( isEven(num) == false ) {
            console.log(num)
        }
    }
}

list = [1,2,3,4,5,6,7,8,9]

console.log(oddNums(list))