const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: false, 
    fridge: {
        price: 500,
        works: false, 
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

const hasOven = kitchen.hasOven
const fridgeWorks = kitchen.fridge.works
const fridgeItems = kitchen.fridge.items
const owner = kitchen.owner
const fridgePrice = kitchen.fridge.price

hasOven ?
    fridgeWorks ?
        console.log( `${owner}'s ${fridgeItems[1].name} expired ${ date - fridgeItems[1].expiryDate } day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the ${fridgeItems[1].name} in.` )
        :
        console.log( `${owner}'s ${fridgeItems[1].name} expired ${ date - fridgeItems[1].expiryDate } day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the ${fridgeItems[1].name} in. And she'll have to pay ${fridgePrice/2} to fix the fridge.` )
    :
    fridgeWorks ?
        console.log( `${owner}'s ${fridgeItems[1].name} expired ${ date - fridgeItems[1].expiryDate } day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook it in.` )
        :
        console.log( `${owner}'s ${fridgeItems[1].name} expired ${ date - fridgeItems[1].expiryDate } day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the ${fridgeItems[1].name} in. And she'll have to pay ${fridgePrice/2} to fix the fridge.` )
