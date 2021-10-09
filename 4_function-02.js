function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

    var numOfbottles = money /1.5;// this will give you an approximate
    // value, so you need to round it down. meaning exact
    // amount of bottles that can be bought.

    // To round it down  follow the comment below.

    // var numOfbottles = Math.floor(money/1.5);-----> exact number of bottles.

    console.log("buy " +numOfbottles  +" bottles of milk");

    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return money % 1.5; //Remainder of this division
  }
  
