//JavaScript Program to Convert Objects to Strings

var person = {
  age: 28,
  add: "hyd",
};

var result1 = String(person);
var result2 = String(person["add"]);

console.log(result1);
console.log(result2);

console.log(typeof result2);
