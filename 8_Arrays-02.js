// FizzBuzz challenge
// The code will display Fizz for multiples of 3, Buzz for multiples of 5, and FizzBuzz for multiple of 3&5.

var display = [];
var start = 1;
function fizBuzz() {
  if (start % 3 === 0 && start % 5 === 0 ) {
    display.push("FizzBuzz");
  }
  else if (start % 3 === 0) {
    display.push("Fizz");
  }
  else if (start % 5 === 0) {
    display.push("Buzz");
  }
  else{
    display.push(start);
  }
  start++;
  console.log(display);
}
