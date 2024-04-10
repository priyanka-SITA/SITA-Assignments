function swapTwoVariables(a, b) {
  var temp = a;
  a = b;
  b = temp;
  return "value of a: " + a + "\n vaule of b: " + b;
}
console.log(swapTwoVariables(10, 20));
