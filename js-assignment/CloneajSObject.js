//JavaScript Program to Clone a JS Object

var person = {
  name: "jack",
  age: 30,
  addres: "hyd",
  hobbies: ["reading", "games", "coding"],
};

var clonePerson = Object.assign({}, person);

console.log(clonePerson);

clonePerson.name = "peater";

console.log(clonePerson.name);
console.log(clonePerson);
console.log(person.name);
