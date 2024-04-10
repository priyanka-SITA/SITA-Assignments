function fibonacciSeries(num) {
  var num1 = 0,
    num2 = 1,
    nextTerm;
  for (var i = 0; i <= num; i++) {
    console.log(num1);
    nextTerm = num1 + num2;
    num1 = num2;
    num2 = nextTerm;
  }
}
fibonacciSeries(4);
