/*Javascript Program to Generate a Random Number Between Two Numbers */

function randomNumber(min, max) {
  var random = Math.random();
  var scalnum = min + random * (max - min + 1);

  var result = Math.floor(scalnum);
  return result;
}
console.log(randomNumber(20, 20));
