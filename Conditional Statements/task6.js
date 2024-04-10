//Check if a given number n is positive, negative, or zero. Print the corresponding message.

function positiveNum(num) {
  if (num > 0) {
    console.log("+ve number");
  } else if (num < 0) {
    console.log("-ve number");
  } else {
    console.log("0 number");
  }
}
positiveNum(0);
