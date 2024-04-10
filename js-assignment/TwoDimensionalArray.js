//JavaScript Program to Create Two Dimensional Array

function twoDimensional(a, b) {
  var arr = [];
  for (var i = 0; i < a; i++) {
    for (var j = 0; j < b; j++) {
      arr[i] = [];
    }
  }
  for (var i = 0; i < a; i++) {
    for (var j = 0; j < b; j++) {
      arr[i][j] = j;
    }
  }
  return arr;
}
console.log(twoDimensional(2, 5));
