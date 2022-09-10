const reverseString = function(text) {
  let stringArray = text.split("");
  let reversedArray = stringArray.reverse();
  return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
