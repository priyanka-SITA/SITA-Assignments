var currentDate = new Date();

var day = currentDate.getDate();

var month = currentDate.getMonth() + 1;

var year = currentDate.getFullYear();

if (day < 10) {
  day = 0 + day;
}

if (month < 10) {
  month = 0 + month;
}
/*04/01/2024
04-01-2024
01-04-2024
01/04/2024 */

var formateDate1 = day + "/" + month + "/" + year;
console.log(formateDate1);

var formateDate2 = day + "-" + month + "-" + year;
console.log(formateDate2);

var formateDate3 = month + "-" + day + "-" + year;
console.log(formateDate3);

var formateDate3 = month + "/" + day + "/" + year;
console.log(formateDate3);
