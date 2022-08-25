const Calculator = require ('./calculator');

describe('Maths method', () => {
  test('Expect adding two numbers',  () => {
    let num1 = 1;
    let num2 = 2;
    let result = num1 + num2;
    expect(Calculator.add(num1, num2)).toBe(result);
  });

  test('Expect subtracting two numbers',  () => {
    let num1 = 2;
    let num2 = 1;
    let result = num1 - num2;
    expect(Calculator.subtract(num1, num2)).toBe(result);
  });

  test('Expect multiply two numbers',  () => {
    let num1 = 1;
    let num2 = 2;
    let result = num1 * num2;
    expect(Calculator.multiply(num1, num2)).toBe(result);
  });

  test('Expect devide two numbers',  () => {
    let num1 = 2;
    let num2 = 1;
    let result = num1 / num2;
    expect(Calculator.divide(num1, num2)).toBe(result);
  });

});