/* JavaScript Program to Pass a Function as Parameter
 */

function funParameter(params) {
  return "Hello";
}
function funParameter1(str, funct) {
  var massage = funct;
  console.log(`${massage} ${str}`);
}
funParameter1("jhanu", funParameter());
