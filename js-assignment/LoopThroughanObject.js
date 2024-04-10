//JavaScript Program to Loop Through an Object

var person = {
  name: "jack",
  age: 30,
  addres: "hyd",
  hobbies: ["reading", "games", "coding"],
};

for (var key in person) {
  var value;
  value = person[key];
  console.log(key + " -" + value);
}
