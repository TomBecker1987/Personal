const myList = [ { diet:"vegan" , politics:"left" } , { age:32 , relationship_status:"single" } ];

myList[0].diet = "carnivore";

// console.log(myList[0]);

myList.pop();

// console.log(myList);


// *****exercise 3***** //

newArray = [ { music : "indie" , genre : "bedroom pop" } , { IQ : "super high" , isFunny : true } ];

myList.push( [...newArray] );

console.log(myList);