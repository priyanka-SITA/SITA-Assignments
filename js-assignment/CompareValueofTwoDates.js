//JavaScript Program to Compare The Value of Two Dates

var d1 = new Date();
var d2 = new Date();
console.log(d1, d2);

var Compare1 = d1 < d2;
console.log(Compare1);

var Compare2 = d1 > d2;
console.log(Compare2);

var Compare3 = d1 <= d2;
console.log(Compare3);

var Compare4 = d1 >= d2;
console.log(Compare4);

var Compare5 = d1.getTime() === d2.getTime();
console.log(Compare5);
var Compare6 = d1.getTime() !== d2.getTime();
console.log(Compare6);
