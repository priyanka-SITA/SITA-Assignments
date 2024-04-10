/*Problem 4: Find the Second Minimum Element
Write a function that takes an array of numbers as an argument and returns the second smallest number in the array.
Example:
For the input array [5, 2, 8, 12, 3], the output should be 3.
*/
function secondMinNum(arr) {
  var firstMin = arr[0];
  var secondMin = arr[1];

  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] > firstMin) {
      secondMin = firstMin;
      firstMin = arr[i];
    } else if (arr[i] < secondMin) {
      secondMin = arr[i];
    }
  }
  return [secondMin];
}
console.log(secondMinNum([5, 2, 8, 12, 3]));
