/*var num1 = 60;
var num2 = 72;

var result;
for (var i = 0; i <= num1 && i <= num2; i++) {
  if (num1 % i == 0 && num2 % 2 == 0) {
    result = i;
  }
}
console.log(`HCF of ${num1} and ${num2} is  ${result}`);*/

function findFactors(number) {
  const factors = [];

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      factors.push(i);
    }
  }

  return factors;
}

const number = 36;
const factors = findFactors(number);
console.log(`The factors of ${number} are: ${factors}`);
