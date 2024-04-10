//JavaScript Program to Get Random Item From an Array

function getRandomArr(array) {
  var random = Math.floor(Math.random() * array.length);
  var result = array[random];

  return result;
}
console.log(getRandomArr([2, 4, "priya", "hello", 56, 8, 5]));
