function removeSpace(str) {
  var words = str.split(" ");
  var out = "";
  for (var i = 0; i < words.length; i++) {
    out += words[i];
  }
  return out;
}
console.log(removeSpace("hello world welcome to test application"));
