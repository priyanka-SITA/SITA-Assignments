function convertStringToCamelCase(str) {
  var out = "";
  var words = str.split(" ");
  for (let index = 1; index < words.length; index++) {
    out += words[index][0].toUpperCase() + words[index].substring(1);
  }

  return words[0] + out;
}

console.log(convertStringToCamelCase("hello world"));
