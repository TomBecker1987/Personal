const tomModule = function () {
    const makeCatSound = function () {
        return "Meow!";
    }

    const makeDogSound = function () {
        return "Woof!";
    }

    const makeTerroristSound = function (x, y) {
        return "Allahhu Akbar!";
    }

    const giveMeMoney = function (x, y) {
        return "f*** off!";
    }

    return {
        makeCatSound:makeCatSound,
        makeDogSound:makeDogSound,
        makeTerroristSound:makeTerroristSound,
        giveMeMoney:giveMeMoney
    }

}

const tom = tomModule()

console.log(tom.makeCatSound())
console.log(tom.makeDogSound())
console.log(tom.makeTerroristSound())
console.log(tom.giveMeMoney())