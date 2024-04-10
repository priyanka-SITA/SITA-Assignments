//JavaScript Program to Merge Property of Two Objects

var person = {
  name: "jack",
  age: 78,
};
var student = {
  add: "hyd",
};

var newObj = Object.assign(person, student);

console.log(newObj);
