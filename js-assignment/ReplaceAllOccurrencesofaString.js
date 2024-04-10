//JavaScript Program to Replace All Occurrences of a String
const string = "Mr Red has a red house and a red car";

var regex = /red/gi;

var newText = string.replace(regex, "blue");

console.log(newText);
