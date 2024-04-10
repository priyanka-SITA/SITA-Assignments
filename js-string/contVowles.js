/*2. Count the Number of Vowels in a Given String
 Nb Given a string str, return the number of vowels in the string.
Input: str = "Hello World"
Output: 3
*/ /*function countVowels(name) {
  var count = 0;
  var vowels = ["a", "e", "i", "o"];
  for (i = 0; i <= name.length; i++) {
    if (vowels.includes(name.charAt(i))) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("hello world"));*/
var str = "hello world";
var count = 0;
var vowels = ["a", "e", "i", "o", "u"];
for (var i = 0; i < str.length; i++) {
  if (vowels.includes(str.charAt(i))) {
    count++;
  }
}
console.log(count);
