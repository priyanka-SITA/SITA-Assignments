/*Problem 14: Remove Duplicates from an Array
Write a function that takes an array as an argument and returns an array with duplicates removed.
Example:
For the input array [1, 2, 2, 3, 4, 4, 5], the output should be [1, 2, 3, 4, 5].
 */
function removeDuplicates(arr) {
  var arr2 = [];
  for (var i = 0; i < arr.length; i++) {
    if (!arr2.includes(arr[i])) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
