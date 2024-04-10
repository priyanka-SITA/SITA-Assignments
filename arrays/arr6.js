/*/*Problem 6: Find the Sum of Array Elements
Write a function that takes an array of numbers as an argument and returns the sum of all the elements in the array.
Example:
For the input array [5, 2, 8, 12, 3], the output should be 30.
*/
var arr = [2, 3, 6, 8];
var sum = 0;
for (var i = 0; i <= arr.length - 1; i++) {
  sum += arr[i];
}
console.log(sum);
