//JavaScript Program to Append an Object to An Array

function arrObj(arr, obj) {
  arr.push(obj);

  return arr;
}

var array = [1, 2, 3, 4];
var Object = { a: 2, b: 8 };
console.log(arrObj(array, Object));
