function number(num) {
  var i = 1;
  while (i <= num) {
    if (i > 0) {
      console.log(i + " :+ve number ");
    } else if (i < 0) {
      console.log(i + " :-ve number ");
    } else {
      console.log(i + " :0 number ");
    }
    i++;
  }
}
number(5);
