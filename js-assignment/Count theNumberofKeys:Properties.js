//JavaScript Program to Count the Number of Keys/Properties in an Object

var person = {
  name: "priyanka",
  age: 29,
  add: "hyd",
};

var count = 0;
for (var key in person) {
  ++count;
}
console.log(count);
