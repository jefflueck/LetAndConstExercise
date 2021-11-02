// ES5 Global Constants
var PI = 3.14;
PI = 42; // stop me from doing this!

/* Write an ES2015 Version */
const PI = 3.14; // My solution

// Quiz Questions
// Question 1
console.log('var is a variable put into global scope on the window object');

console.log('let has block scope and can be reassigned but not redeclared');

// Question 2
console.log('var is a variable put into global scope on the window object');

console.log(
  'const prevents a variable from ever being reassigned or redeclared regardless of where it is declared in our file when we use primitive types'
);

// Question 3
console.log('let has block scope and can be reassigned but not redeclared');

console.log(
  'const prevents a variable from ever being reassigned or redeclared regardless of where it is declared in our file when we use primitive types'
);

//Question 4
console.log(
  'hoisting is where the variable is initialized when JavaScript compiles before being read by the browser, it is brought to the top of the compile before it is even given a value.'
);
