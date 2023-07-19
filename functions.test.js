const functions = require('./functions');

describe('The text is:' , () => {
  test('less than 10 characters long', () => {
    expect(functions.stringLength('twelve')).not.toBeGreaterThan(10);
  });
  
  test('is not the same reversed', () => {
    expect(functions.reverseString('twelve')).not.toMatch(/twelve/);
  });

  test('capitalized now', () => {
    expect(functions.capitalString('twelve')).toMatch(/Twelve/);
  });
});

describe('The calculator results are:', () => {
  test('- Addition:', () => {
    expect(functions.calculator.add(3,3)).toBe(6);
  });
  
  test('- Subtraction:', () => {
    expect(functions.calculator.subtract(3, 3)).toBe(0);
  });

  test('- Division:', () => {
    expect(functions.calculator.divide(3, 3)).toBe(1);
  });

  test('- Multiplication:', () => {
    expect(functions.calculator.multiply(3, 3)).toBe(9);
  });
});