// program to reverse a string

var str = "priyanka";

var newString = "";
for (var i = str.length - 1; i >= 0; i--) {
  newString += str[i];
}
console.log(newString);
