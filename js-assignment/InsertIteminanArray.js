//JavaScript Program to Insert Item in an Array

function insertElement(arr) {
  var index = 4;
  var element = 8;
  arr.splice(index, 0, element);
  return arr;
}
console.log(insertElement([1, 2, 3, 4, 5]));
