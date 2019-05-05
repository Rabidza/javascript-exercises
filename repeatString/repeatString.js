const repeatString = function(string, num) {
  if (num < 0){
    return "ERROR";
  }
  let newString = "";
  for (let i = 0; i < num; i++){
    newString += string;
  };
  return newString;
}

module.exports = repeatString
