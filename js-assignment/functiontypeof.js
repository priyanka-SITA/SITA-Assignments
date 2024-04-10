/*JavaScript Program to Check If a Variable is of Function Type */

function testVariable(Variable) {
  if (Variable instanceof Function) {
    console.log("The variable is of function type");
  } else {
    console.log("The variable is  not  of function type");
  }
}
const count = 5;
const x = function str() {
  console.log("Hello");
};

testVariable(count);
