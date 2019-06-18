const plants = ["Oak", "Lilly", "Belladonna", "Tulip", "Yew"]
console.log(plants.length) // prints 5

let lastIndex = plants.length - 1 // equal to (5 - 1) = 4
console.log(plants[lastIndex]) // prints "Yew"
console.log(plants[4]) // the same

console.log("The first plant is " + plants[0] + ", and the last one is " + plants[plants.length-1] + ".");