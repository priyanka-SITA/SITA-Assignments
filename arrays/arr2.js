/*Problem 2: Find the Minimum Element
Write a function that takes an array of numbers as an argument and returns the smallest number in the array.
Example:
For the input array [5, 2, 8, 12, 3], the output should be 2.
*/

function findMinNum(arr) {
  var minValue = arr[0];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }
  return minValue;
}
var minValue = findMinNum([5, 2, 8, 12, 3]);
console.log(minValue);
