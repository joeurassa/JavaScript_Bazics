// Changing string casing. This solution has a step by step solution
// for you to learn how to braekdown a problem.

// * Change the casing of a name set correctly when user inputs their name
//   no matter how they write it down.

// step-1
// Create a variable thats going to store the user name
var name = prompt("What is your name")

// step-2
// Capitalise the first letter of the name
// (a)Isolate the first character
var firstChar = name.slice(0,1);
// (b)Change first character to upper case
var upperCaseFirstChar = firstChar.toUpperCase();

var restOfName = name.slice(1,name.length);
// (d)Concactonate first char with the rest of the name
//    and change the rest of thr name to lower case.
var fullName = upperCaseFirstChar + restOfName.toLowerCase();

// step-3
// Use the capitalised version of user name.
alert("Hello "+ fullName+"!");
