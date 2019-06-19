const calcAge = function(currentYear , yearOfBirth) {
    let age1 = currentYear - yearOfBirth
    let age2 = age1 - 1
    console.log(`You are either ${age1} or ${age2}`)
}


const age = calcAge(2017, 1989)

console.log(age)
