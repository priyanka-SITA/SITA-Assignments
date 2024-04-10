function numberOfOccurrences(str, ch) {
  var count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) {
      count++;
    }
  }
  return count;
}
console.log(numberOfOccurrences("hello", "l"));
