/*Problem 9: Find the Mode of Array Elements
Write a function that takes an array of numbers as an argument and returns the mode of all the elements in the array.
Example:
For the input array [5, 2, 8, 12, 3, 8], the output should be 8.
*/
var arr = [3, 5, 7, 8, 1, 2, 7, 4, 7];
var maxCount = 0;
var mode = 0;
for (var i = 0; i < arr.length; i++) {
  var count = 0;
  for (var j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      count++;
    }
    if (count > maxCount) {
      maxCount = count;
      mode = arr[i];
    }
  }
}
console.log(mode);
