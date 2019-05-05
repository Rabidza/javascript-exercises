const palindromes = function(str) {
  plainString = str.toLowerCase().replace(/[^A-Za-z]/g, "");
  return (plainString.split("").reverse().join("") == plainString
  );
}

module.exports = palindromes
