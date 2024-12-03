const calculator = {
  add: (x, y) => {
    return x + y;
  },

  minus: (x, y) => x - y,

  divide: (x, y) => {
    let diviision = x / y;
    return diviision;
  },
};

console.log(calculator.minus(30, 20));

console.log(calculator.add(30, 20));

console.log(calculator.divide(30, 20));
