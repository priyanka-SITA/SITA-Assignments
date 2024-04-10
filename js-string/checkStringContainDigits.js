function checkStringContainDigits(str) {
  for (var i = 0; i < str.length - 1; i++) {
    if (isNaN(parseInt(str[i]))) {
      return false;
    }
  }

  return true;
}

console.log(checkStringContainDigits("12345"));
