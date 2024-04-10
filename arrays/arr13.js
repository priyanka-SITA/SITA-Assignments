/* Problem 13: Find the Union of Two Arrays
Write a function that takes two arrays as arguments and returns an array containing all the elements from both arrays with duplicates removed.
Example:
For the input arrays [1, 2, 3, 4] and [3, 4, 5, 6], the output should be [1, 2, 3, 4, 5, 6].
 */
/*function findUnion(arr1, arr2) {
  var arr3 = [];
  for (var i = 0; i <= arr1.length - 1; i++) {
    if (!arr3.includes(arr1[i])) {
      arr3.push(arr1[i]);
    }
  }
  for (var j = 0; j <= arr2.length - 1; j++) {
    if (!arr3.includes(arr2[j])) {
      arr3.push(arr2[j]);
    }
  }

  return arr3;
}
console.log(findUnion([1, 2, 3, 4], [3, 4, 5, 6]));*/

var arr1 = [1, 2, 3, 4];
var arr2 = [3, 4, 5, 6];

var arr3 = [];

for (let i = 0; i < arr1.length; i++) {
  if (!arr3.includes(arr1[i])) {
    arr3.push(arr1[i]);
  }
}
for (let j = 0; j < arr2.length; j++) {
  if (!arr3.includes(arr2[j])) {
    arr3.push(arr2[j]);
  }
}

console.log(arr3);
