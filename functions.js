const capitalString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const stringLength = (string) => {
  return string.length;
}

const reverseString = (string) => {
  return string.split("").reverse().join("");
}

const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  divide: (a, b) => {
    return a / b;
  },
  multiply: (a, b) => {
    return a * b;
  }
}

module.exports = {stringLength, reverseString, capitalString, calculator};