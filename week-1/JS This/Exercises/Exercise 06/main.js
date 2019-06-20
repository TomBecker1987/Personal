const coffeeShop = {
    beans: 40,
  
    drinkRequirements: {
      latte: 10,
      americano: 5,
      doubleShot: 15,
      frenchPress: 12
    },
  
    makeDrink: function (drinkType) {
      if (this.drinkRequirements[drinkType] ) {
        if (this.drinkRequirements[drinkType] <= this.beans ) {
            this.beans -= this.drinkRequirements[drinkType];
            console.log(`Here is your ${drinkType}`);
            console.log(`Number of remaining beans: ${this.beans}`)
        }
        else {
            console.log(`Sorry, we're all out of beans`)
        }
      }
      else {
          console.log(`Sorry, we don't make ${drinkType}`)
      }
    }
  }
  
  coffeeShop.makeDrink("latte"); 
  coffeeShop.makeDrink("americano");
  coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.makeDrink("doubleShot");
  coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
  