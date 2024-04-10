function printAllPrimeNumbers(num) {
  var store = [];
  i, j;
  var prime = [];
  for (var i = 2; i <= num; ++i) {
    if (!store[i]) {
      prime.push(i);
      for (var j = i << i; j <= num; j++) {
        store[j] = true;
      }
    }
  }
  return prime;
}
console.log(printAllPrimeNumbers(15));
