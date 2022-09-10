const removeFromArray = function(myArray, ...args) {
  const remArray = Array.from(args);
  for (let i = 0; i < myArray.length; i++) {
    for (rem of remArray) {
      if (myArray[i] === rem) {
        myArray.splice(i, 1);
        i--;
      }
    }
  }
  return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
