let car = {
    color: "Black",
    numWheels : 4,
    isFancy : true
}

let fancyOrNot;

car.isFancy ? fancyOrNot = "fancy" : fancyOrNot = "not fancy"

console.log("The " + car.color + " car has " + car.numWheels + " wheels. It is " + fancyOrNot + ".");