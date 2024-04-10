/*Problem 13: Do While Loop + Nested If Statement
Print all numbers from 1 to n using a do while loop and check if each number is even or odd using a nested if statement.
Example:
For n = 5, print 1 3 5.*/

function printNum(n) {
  var i = 0;
  do {
    i++;
    if (i % 2 === 0) {
      console.log(i + " :even number");
    } else {
      console.log(i + " :0dd number ");
    }
  } while (i < 5);
}

printNum(5);

function evenOod(num) {
  for (i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(i + " :even number ");
    } else {
      console.log(i + " : odd number");
    }
  }
}
evenOod(-5);
/*Problem 15: For Loop + If-Else-If Statement
Print all numbers from 1 to n using a for loop and check if each number is positive, negative, or zero using an if-else-if statement.
Example:
For n = 5, print 1 2 3 4 5.
*/

function printNumbers(num) {
  for (i = 1; i <= num; i++) {
    if (i > 0) {
      console.log(i + " :+ve number ");
    } else if (i < 0) {
      console.log(i + " : -ve number");
    } else {
      console.log(i + " 0 number");
    }
  }
}
printNumbers(-5);
