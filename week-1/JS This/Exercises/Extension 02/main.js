const coffeeShop = {
    beans: 40,

    money : 0,

    buyBeans : function(numBeans) { let beanPrice = 50 ; this.money -= numBeans * beanPrice ; this.beans += numBeans;
    console.log(`Amount of current beans: ${this.beans}`); 
    console.log(`Amount of money left: ${this.money}`) } ,
  
    drinkRequirements: {
      latte: {beanRequirement : 10, price: 4},
      americano: {beanRequirement : 5, price: 5},
      doubleShot: {beanRequirement : 15, price: 6},
      frenchPress: {beanRequirement : 12, price: 7}
    },

    
    buyDrink : function (drinkType) {
        this.money += this.drinkRequirements[drinkType].price;
        this.makeDrink();
    },
  
    makeDrink: function (drinkType) {
      if ( this.drinkRequirements[drinkType] && this.drinkRequirements[drinkType] <= this.beans ) {
        this.beans -= this.drinkRequirements[drinkType];
        console.log(`Here is you ${drinkType}`);
        console.log(`Number of beans left: ${this.beans}`);
      }
      else if ( this.drinkRequirements[drinkType] > this.beans ) {
        console.log(`Sorry, we're out of beans.`)
      }
      else if ( !this.drinkRequirements[drinkType] ) {
        console.log(`Sorry, we don't make ${drinkType}`)
      }
    }
  }
  
  coffeeShop.buyDrink("latte")
  coffeeShop.buyDrink("americano")
  coffeeShop.buyDrink("doubleShot")
  coffeeShop.buyDrink("frenchPress")
  console.log(coffeeShop.money)
  