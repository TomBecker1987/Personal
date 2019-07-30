let calculateFactorial = function(number, currentSum = 0){
    number--
    if ( number == 0 ) { return currentSum }
    if ( currentSum == 0 ) {
        currentSum += (number+1) * number
    }
    else {
        currentSum *= number
    }
    
    return calculateFactorial(number, currentSum)
}

console.log(calculateFactorial(10))

