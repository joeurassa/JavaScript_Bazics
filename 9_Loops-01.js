// This is an extension of FizzBuzz challenge.

// While loop is added to make auto-push of the next values.

var display = [];
var start = 1;

while (start <= 100) {

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
}
