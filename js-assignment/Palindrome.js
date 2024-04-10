function isPalindrome(string) {
  var myStr = string.length;
  for (var i = 0; i < myStr / 2; i++) {
    if (string[i] !== string[myStr - 1 - i]) {
      return "its not palindrome";
    }
  }
  return "its palindrome";
}
console.log(isPalindrome(""));
