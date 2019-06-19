const calcAge = function(currentYear , yearOfBirth) {
    let age = currentYear - yearOfBirth
    return age
}


const age = calcAge(2017, 1989)

console.log(age)
