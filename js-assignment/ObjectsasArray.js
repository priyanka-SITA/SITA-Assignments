//JavaScript Program to Extract Given Property Values from Objects as Array

function objAsArray(arr, prop) {
  var tempValue = arr.map((item) => item[prop]);
  return tempValue;
}
console.log(
  objAsArray(
    [
      { a: 1, b: 2 },
      { a: 4, b: 5 },
      { a: 6, b: 8 },
    ],
    "b"
  )
);
