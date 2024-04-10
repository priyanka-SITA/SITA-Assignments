function removeSpecialChar(str) {
  var out = "";
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (char >= "0" && char <= "9")
    ) {
      out += char;
    }
  }
  return out;
}

console.log(removeSpecialChar("hello!@#world"));
