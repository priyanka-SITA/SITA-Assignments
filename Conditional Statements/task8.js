//Check if a given number n is greater than 10. If so, print "Greater than 10", otherwise print "Less than or equal to 10".
function greaterNum(num) {
  if (num > 10) {
    console.log("given number is greater than 10");
  } else {
    console.log("given number is less than 10");
  }
}
greaterNum(6);

function evenOdd(num) {
  if (num % 2 === 0) {
    console.log("given number is even number");
  } else {
    console.log("given number is odd number");
  }
}
evenOdd(5);

function positiveNum(num) {
  if (num >= 0) {
    console.log("given number is +ve");
  } else {
    console.log("given number is -ve");
  }
}
positiveNum(-5);
