/*Problem 5: Check if Array is Sorted
Write a function that takes an array of numbers as an argument and returns true if the array is sorted in ascending order, and false otherwise.
Example:
For the input array [1, 2, 3, 4, 5], the output should be true.
*/

/*function sortArray(arr) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const sortedArr = sortArray([5, 4, 3, 2, 1]);
console.log(sortedArr);*/
var arr = [8, 5, 9, 2];
arr.sort();
console.log(arr);
