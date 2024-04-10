var sum = 0;
function naturalNumbers(num) {
  for (var i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(naturalNumbers(4));
