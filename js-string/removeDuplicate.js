function removeDuplicate(str) {
  var out = "";
  for (let i = 0; i < str.length; i++) {
    if (out.indexOf(str[i]) === -1) {
      out += str[i];
    }
  }
  return out;
}

console.log(removeDuplicate("hello"));
