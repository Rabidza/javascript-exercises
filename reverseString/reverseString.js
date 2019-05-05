const reverseString = function(s) {
  stringList = s.toString().split("");
  newString = "";
  for (let i = stringList.length - 1; i >= 0; i--)
  {
    newString += stringList[i];
  }

  return newString;

}

module.exports = reverseString
