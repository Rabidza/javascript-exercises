const caesar = function(str, shift) {
  let arr = str.split('');
  let shifted = arr.map(char => shiftTo(char, shift));
  let newString = shifted.join('');
  return newString;
}

const codeSet = code => (code < 97 ? 65 : 97);
const alpha = (a, z) => (a % z + z) % z;

const shiftTo = (char, shift) => {
  const code = char.charCodeAt();
  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      return String.fromCharCode(alpha(code + shift - codeSet(code), 26) + codeSet(code));
  }
  return char;
};

module.exports = caesar


module.exports = caesar
