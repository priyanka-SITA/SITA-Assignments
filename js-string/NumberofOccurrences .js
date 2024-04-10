//JavaScript Program to Check the Number of Occurrences of a Character in the String

function replaceAllOccurrences(str, ch1, ch2) {
  var out = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch1) {
      out += ch2;
    } else {
      out += str[i];
    }
  }
  return out;
}

console.log(replaceAllOccurrences("hello world", "o", "a"));
