class Animal {
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
        this.children = []
    }

        giveBirth(name){
            this.children.push(name)
        

    }
}

class Human {
    constructor(name, age, isFriendly) {
        this.name = name
        this.age = age
        this.isFriendly = isFriendly
    }
}

// let cat = new Animal("Mitzi", 4)
// let john = new Human("John", 36, true)

// cat.giveBirth("Dolly")
// console.log(cat.children) // should print an array with 1 item: ["Dolly"]﻿


// class Vehicle{
//     constructor (x, y, speed) {
//       this.x = x;
//       this.y = y;
//       this.speed = speed;
//     //   Vehicle.carsSold++
//    }

//     // static getInfo() {
//     //     console.log("We've sold " + Vehicle.carsSold + " vehicles.");
//     // }

//     // static calculateMoney() {
//     //     let output = Vehicle.carsSold * 30000
//     //     console.log(output)
//     // }

//    set speed(speed){
//        if (speed < 0){
//         return console.log("speed must be positive")
//        }
//        this.speed = speed
//    }
// }

class Vehicle{
    constructor(x,y,speed,fuel){
        this.x = x;
        this.y = y;
        this._speed = speed;
        this._fuel = fuel;
    }
    set speed(speed){
        if(speed<0){
            return console.log("Speed must be positive")
        }
        this._speed = speed
    }
    get speed(){
        return this._speed
    }
    set fuel(fuel){
        if(fuel<0 || fuel>150){
            return console.log("fuel must be less than 150 or more than 0")
        }
        this._fuel = fuel
    }
    get fuel(){
        return this._fuel
    }
}

// Vehicle.carsSold = 0

let Volvo = new Vehicle(3,4,200)
let Mitsubishi = new Vehicle(1,2,250)

// Vehicle.getInfo()

// Vehicle.calculateMoney()

