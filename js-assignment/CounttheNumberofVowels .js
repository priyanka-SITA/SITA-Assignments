var str = "hello world";
var count = 0;
var vowels = ["a", "e", "i", "o", "u"];
for (var i = 0; i < str.length; i++) {
  if (vowels.includes(str.charAt(i))) {
    count++;
  }
}
console.log(count);
