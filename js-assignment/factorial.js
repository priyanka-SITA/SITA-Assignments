var num = 5;
if (num < 0) {
  console.log("Nagative numbers does not exit");
} else {
  var result = 1;
  for (var i = 1; i <= num; i++) {
    result *= i;
  }
  console.log(`the factorial of ${num} is${result}`);
}
