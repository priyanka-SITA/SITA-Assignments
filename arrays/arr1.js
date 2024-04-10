/*Problem 1: Find the Maximum Element
Write a function that takes an array of numbers as an argument and returns the largest number in the array.
Example:
For the input array [5, 2, 8, 12, 3], the output should be 12.
*/

function findMaxNum(arr) {
  var largest = arr[0];
  for (let index = 1; index <= arr.length; index++) {
    if (arr[index] > largest) {
      largest = arr[index];
    }
  }
  return largest;
}
var largest = findMaxNum([5, 2, 8, 12, 3]);
console.log(largest);
