function replaceAllOccurrences(str, ch1) {
  var out = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == ch1) {
      out++;
    }
  }
  return out;
}

console.log(replaceAllOccurrences("hello world", "o"));
