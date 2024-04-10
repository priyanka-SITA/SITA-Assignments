function positiveNumber(number) {
  if (number > 0) {
    return "+ve";
  } else if (number < 0) {
    return "-ve";
  } else {
    return "0 number";
  }
}
console.log(positiveNumber(0));
