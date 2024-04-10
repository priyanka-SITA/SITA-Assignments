/*Problem 15: Rotate Array by N Elements
Write a function that takes an array and a number n as arguments and rotates the array to the left by n elements.
Example:
For the input array [1, 2, 3, 4, 5] and n = 2, the output should be [3, 4, 5, 1, 2].
 */
function rotateArray(arr, num) {
  var rotateArr = arr.slice(num).concat(arr.slice(0, num));
  return rotateArr;
}
console.log(rotateArray([1, 2, 3, 4, 5], 2));
