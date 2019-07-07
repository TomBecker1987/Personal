//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
let validator = require('validator');
 
// console.log(validator.isEmail('foo@bar.com'));
// console.log(validator.isEmail('shoobert@dylan'));

//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
// console.log(validator.isMobilePhone("786-329-9958", [,'en-US']))



// //Ex. 3
// //Use the following blacklist
// let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
// //Along with validator's `blacklist` method to clean this text:
// let text = "I'M SO EXCITED!!!~!"
// //Ultimately, it should print "im so excited"
// let newText = validator.blacklist(text,`\\["!","?",".","@","~",",","'"\\]`)
// console.log(newText.toLowerCase())

///faker exercise

let faker = require('faker');

let makeHuman = function (number) {
    for (let i=0; i < number; i++) {
        console.log(faker.fake("{{company.companyName}}, {{image.imageUrl}}, {{name.firstName}} {{name.lastName}}"));
    }
}

makeHuman(4)