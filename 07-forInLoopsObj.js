// loops are used to execute a block of code repeteadly till a conditon is satisfied.

// for in loop

let person = {
  name: 'John',
  age: 30,
  isMarried: true,
  occupation: 'Manager',
};

for (let index in person) {
  console.log('the Value of ' + index + ' is ' + person[index]);
}
