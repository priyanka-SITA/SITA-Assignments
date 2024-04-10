/*Problem 12: Find the Intersection of Two Arrays
Write a function that takes two arrays as arguments and returns an array containing the elements that are common to both arrays.
Example:
For the input arrays [1, 2, 3, 4] and [3, 4, 5, 6], the output should be [3, 4].
 */

function intersection(arr1, arr2) {
  var arr3 = [];

  for (var i = 0; i <= arr1.length; i++) {
    var currentElement = arr1[i];

    if (arr2.includes(currentElement) && !arr3.includes(currentElement)) {
      arr3.push(currentElement);
    }
  }
  return arr3;
}

console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));
