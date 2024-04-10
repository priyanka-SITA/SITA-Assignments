//JavaScript Program to Compare Two Strings

const string1 = "JavaScript Program";
const string2 = "javascript program";

var result = string1.toUpperCase() === string2.toUpperCase();

if (result) {
  console.log("strings  are similar ");
} else {
  console.log("strings are  not similar");
}
