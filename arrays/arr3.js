/*Problem 3: Find the Second Maximum Element
Write a function that takes an array of numbers as an argument and returns the second largest number in the array.
Example:
For the input array [5, 2, 8, 12, 3], the output should be 8.
*/

/*function secondMaxNum(arr) {
  var firstLargest = arr[0];
  var secondLargest = arr[1];
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
    }
  }

  return [firstLargest, secondLargest];
}
console.log(secondMaxNum([13, 9, 6, 5, 3]));*/

function secondMaxNum(arr) {
  var fl = arr[0];
  var sl = arr[1];

  for (var i = 2; i <= arr.length; i++) {
    if (arr[i] > fl) {
      sl = fl;
      fl = arr[i];
    } else if (arr[i] > sl) {
      sl = arr[i];
    }
  }
  return [fl, sl];
}
console.log(secondMaxNum([13, 9, 6, 5, 3]));
