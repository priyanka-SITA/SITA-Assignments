var num1 = 8;
var num2 = 880;
var num3 = 688;

var result1 = num1 % 10;
var result2 = num2 % 10;
var result3 = num3 % 10;

if (result1 == result2 && result1 == result3) {
  console.log(`${num1} ${num2} ${num3} have the same last digit`);
} else {
  console.log(`${num1} ${num2} ${num3} have different  last digit`);
}
