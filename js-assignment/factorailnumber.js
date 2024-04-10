function isFactorialNumber(num) {
  if (num < 0) {
    console.log("this number is does not exits");
  } else if (num === 0) {
    console.log(`the factorial of${num} is ${1}`);
  } else {
    var fact = 1;
    for (var i = 1; i <= num; i++) {
      fact *= i;
    }
  }
  return fact;
}
console.log(isFactorialNumber(7));
