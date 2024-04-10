/* JavaScript Program to Perform Function Overloading */

function sum() {
  if (arguments.length == 0) {
    console.log(" you have not passed any arguments");
  } else if (arguments.length == 1) {
    console.log(" pass at least two arguments");
  } else {
    var result = 0;
    var length = arguments.length;
    for (var i = 0; i < length; i++) {
      result = result + arguments[i];
    }
    console.log(result);
  }
}
sum(2, 3, 6, 8, 9);
