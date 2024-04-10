/*Problem 8: Find the Median of Array Elements
Write a function that takes an array of numbers as an argument and returns the median of all the elements in the array.
Example:
For the input array [5, 2, 8, 12, 3], the output should be 5.
*/
var arr = [5, 2, 8, 12, 3];
var arrSort = arr.sort((a, b) => a - b);
var median = 0;
var total = 0;
if (arrSort.length % 2 === 0) {
  var mid = arrSort.length / 2;
  median = Math.floor(total / 2);
} else {
  var middle = Math.floor(arrSort.length / 2);
  median = arrSort[middle];
}
console.log(median);
