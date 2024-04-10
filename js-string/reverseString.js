/*5. Reverse a String Without Using the reverse() Method
Given a string str, return a new string that is the reverse of str without using the reverse() method.
Input: str = "hello"
Output: "olleh"
 */
function reverseString(str) {
  var out = "";
  for (var i = str.length - 1; i >= 0; i--) {
    out += str[i];
  }
  return out;
}

console.log(reverseString("hello"));
