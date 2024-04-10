/*Problem 7: Find the Average of Array Elements
Write a function that takes an array of numbers as an argument and returns the average of all the elements in the array.
Example:
For the input array [5, 2, 8, 12, 3], the output should be 6.
*/

var arr = [3, 7, 8, 9, 5];
var sum = 0;
for (var i = 0; i < arr.length - 1; i++) {
  sum += arr[i];
  var result = Math.floor(sum / arr.length - 1);
}
console.log(result);
