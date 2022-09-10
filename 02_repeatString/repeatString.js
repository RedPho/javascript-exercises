
let text = ""

const repeatString = function(inputText, howMany) {
  if (howMany < 0) {
    return "ERROR";
  }

  text = ""
  for (let i = 0; i < howMany; i++) {
    text += inputText;
  }
  return text;
};


// Do not edit below this line
module.exports = repeatString;
