//JavaScript Program to Replace All Line Breaks with <br>

const string = `I am Learning JavaScript.
JavaScript is fun.
JavaScript is easy.`;

var result = string.replace(/(\n\r|\n|\r)/g, "<br>");

console.log(result);
