/*3. Determine If a String Is a Palindrome
Given a string str, return true if str is a palindrome, otherwise return false.
Input: str = "racecar"
Output: true
*/ function palindrome(str) {
  var end = str.length - 1;

  for (i = 0; i <= str.length; i++) {
    if (str[i] !== str[end]) {
      return false;
    }
    end--;
  }
  return true;
}
console.log(palindrome("nursesrun"));
