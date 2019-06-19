const isEven = function(numToCheck) {
    if (numToCheck % 2 == 0) {
        return true
    }
    else {
        return false
    }
}

const num = prompt("Enter a number:")

console.log(isEven(num))