/*JavaScript Program to Set a Default Parameter Value For a Function */

function defaultParameter(x = 10, y = 15) {
  return x + y;
}
console.log(defaultParameter(4, 8));
console.log(defaultParameter(4));
console.log(defaultParameter());
