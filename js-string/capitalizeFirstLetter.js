function capitalizeFirstLetter(str) {
  var out = "";
  var words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    out += words[i][0].toUpperCase() + words[i].substring(1) + " ";
  }
  return out;
}

console.log(capitalizeFirstLetter("hello. world test"));
