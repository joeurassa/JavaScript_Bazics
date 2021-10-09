//  99 Bottles challenge.

var numOfBottles = 99;

while(numOfBottles >= 0){
  var bottleWord = "bottle";
  if(numOfBottles === 1){
    bottleWord = "bottles";
  }
  console.log(numOfBottles + " "+bottleWord+" of beer on the wall");
  console.log(numOfBottles + " "+ bottleWord+" of beer,");
  console.log("Take one down, pass it around,");
  numOfBottles--;
  console.log(numOfBottles+" "+bottleWord+" of beer on the wall.")

}
