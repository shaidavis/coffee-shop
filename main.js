// var coffeeShop = {
//   beans: 40,

//   drinkRequirements: {
//     latte: 10,
//     americano: 5,
//     doubleShot: 15,
//     frenchPress: 12
//   },

//   makeDrink: function (drinkType) {
//     // TODO: Finish this method

//     if (this.drinkRequirements[drinkType]) 
//       {       
//         if (this.beans >= this.drinkRequirements[drinkType])
//         {
//         this.beans -= this.drinkRequirements[drinkType];
//         alert("Your " + drinkType + " is coming right up!");
//         } else {
//         alert("Sorry, we're out of beans!")
//         }

//       } else {

//       alert("Sorry, we don't make " + drinkType)
//       }

//   }
// }

// coffeeShop.makeDrink("latte");
// // coffeeShop.makeDrink("americano");
// // coffeeShop.makeDrink("filtered");
// // coffeeShop.makeDrink("doubleShot");
// // coffeeShop.makeDrink("frenchPress");
// coffeeShop.makeDrink("cocoa");


var coffeeShop = {
  beans: 40,


  latte: {
    drinkPrice: 1,
    beanRequirement: 10
  },
  americano: {
    drinkPrice: 2,
    beanRequirement: 5
  },
  doubleShot: {
    drinkPrice: 3,
    beanRequirement: 15
  },
  frenchPress: {
    drinkPrice: 4,
    beanRequirement: 12
  },
  
  money: 100,

  drinkAvailable: true,

  makeDrink: function (drinkType) {

    if (this[drinkType] && this.beans >= this[drinkType].beanRequirement) // check if we serve that drink and have enough beans
      { this.beans -= this[drinkType].beanRequirement; // subtract the beanRequirement from the total bean inventory
        alert("Your " + drinkType + " is coming right up!");
        return true;
      } else if (this[drinkType] && this.beans < this[drinkType].beanRequirement ) { // if we make the drink but dont have enough beans
        alert("Sorry, we're out of beans!");
        return false;
      } else {

      alert("Sorry, we don't make " + drinkType) // if we don't make the drink
      return false;
      }

  },

  beanPrice: 1,

  buySupplies: function (numberBeans) {
    this.money -= (numberBeans * this.beanPrice); // subtract the amount we spent on beans from our money count
    console.log("you have " + this.money + " dollars left"); // report back how much money we have left
  },

  buyDrink: function (drinkType) {
    this.makeDrink(drinkType); // check to see if we can make the drink, and make it if we can
    if (this.makeDrink = true) {                // if we *were* able to make the drink:
     
      this.money += this[drinkType].drinkPrice; // add the price of the drink to our money count
      console.log("you have " + this.money + " dollars left"); // and let us know how much money
      console.log("you have " + this.beans + " beans left"); // and beans remain
    
    } else if (this.makeDrink = false) { // if we werent able to make the drink, send a message
      console.log("We can't serve you."); // that we can't serve them
    }
    
  }

}

// coffeeShop.makeDrink("latte");
// // coffeeShop.makeDrink("americano");
// // coffeeShop.makeDrink("filtered");
// // coffeeShop.makeDrink("doubleShot");
// // coffeeShop.makeDrink("frenchPress");
// coffeeShop.makeDrink("cocoa");
// coffeeShop.buySupplies(20);
coffeeShop.buyDrink("coffee");
