const coffeeShop = {
    beans: 40,
  
    drinkRequirements: {
      latte: 10,
      americano: 5,
      doubleShot: 15,
      frenchPress: 12
    },
  
    makeDrink: function (drinkType) {
      if ( this.drinkRequirements[drinkType] && this.drinkRequirements[drinkType] <= this.beans ) {
        this.beans -= this.drinkRequirements[drinkType];
        console.log(`Here is you ${drinkType}`);
        console.log(`Number of beans left: ${this.beans}`)
      }
      else if ( this.drinkRequirements[drinkType] > this.beans ) {
        console.log(`Sorry, we're out of beans.`)
      }
      else if ( !this.drinkRequirements[drinkType] ) {
        console.log(`Sorry, we don't make ${drinkType}`)
      }
    }
  }
  
  coffeeShop.makeDrink("latte"); 
  coffeeShop.makeDrink("americano");
  coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.makeDrink("doubleShot");
  coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
  