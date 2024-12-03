// Classes are blueprints for creating objects with predefined properties and methods.

class add {
  constructor(valueOne, valueTwo) {
    this.valueOne = valueOne;
    this.valueTwo = valueTwo;
  }

  sum() {
    let addition = this.valueOne + this.valueTwo;
    return addition;
  }

  minus() {
    return this.valueOne - this.valueTwo;
  }
}

let calculator = new add(100, 20);

console.log(calculator.minus());

console.log(calculator.sum());
