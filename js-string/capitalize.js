/*4. Capitalize the First Letter of Each Word in a String
Given a string str, return a new string where the first letter of each word is capitalized.
Input: str = "hello world"
Output: "Hello World"
 */
/*function capitalize(str) {
  var words = str.split(" ");

  for (i = 0; i <= words.length; i++) {
    if (words[i]) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
  }

  return words.join(" ");
}
console.log(capitalize("hello world"));*/

var str = "hello world";
var word = str.split(" ");
for (var i = 0; i < str.length; i++) {
  if (word[i]) {
    word[i] = word[i][0].toUpperCase() + word[i].substring(1);
  }
}
console.log(word.join(" "));
