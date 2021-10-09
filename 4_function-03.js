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

    
    console.log("buy " + calcBottles(money,1.5) +" bottles of milk");

    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return  //Remainder of this division
  }

  function calcBottles(capital, costPerBottle){
      var numOfbottles = Math.floor(capital,costPerBottle);
      return numOfbottles;
  }
  function calChange(capital,costPerBottle){
      var change = capital % costPerBottle;
      return change;
  }
  
