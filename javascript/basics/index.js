// Different ways to create variables in JavaScript:
var type1; // var variable is available inside the function where it is created
let type2; // let variable is available inside the block where it is created
const type3 = 'initialized'; // same as let variable, but const must be initialized with a value.


// In JavaScript var and let variable can change type if developer does not pay attention.
// Here Example
var number = 0;
let text = 'test';
console.log('Number:', number);
console.log('Text:', text);
number = 'asd';
text = 120;
console.log('Number:', number);
console.log('Text:', text);

// Run the "start" script (npm run start)

/**
 * End result is the following:
 * Number: 2
 * Text: test
 * Number: asd
 * Text: 120
 * 
 * We can see that the variables can change its value and type to anything in JavaScript.
 */