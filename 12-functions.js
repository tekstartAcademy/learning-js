function add(valueOne, valueTwo) {
  let sum = valueOne + valueTwo;
  return sum;
}

let minus = (val1, val2) => {
  let subtraction = val1 - val2;
  return subtraction;
};

let sub = (valueOne, valueTwo) => valueOne - valueTwo;

// console.log(add(5, 10));

// console.log(minus(200, 50));

// console.log(sub(200, 10));

module.exports = { minus };
