/*Problem 18: Do While Loop + If-Else Statement
Print all numbers from 1 to n using a do while loop and check if each number is even or odd using an if-else statement.
Example:
For n = 5, print 1 3 5.*/
function printNum(num) {
  i = 0;
  do {
    i++;

    if (i % 2 === 0) {
      console.log(i + "even number");
    } else {
      console.log(i + "odd number");
    }
  } while (i < num);
}
printNum(5);
/*Problem 19: Do While Loop + If-Else-If Statement
Print all numbers from 1 to n using a do while loop and check if each number is positive, negative, or zero using an if-else-if statement.
Example:
For n = 5, print 1 2 3 4 5.
*/

function numbers(num) {
  var i = 0;
  do {
    i++;
    if (i > 0) {
      console.log(i + ": +ve number");
    } else if (i < 0) {
      console.log(i + ": -ve number");
    } else {
      console.log(i + ": 0 number");
    }
  } while (i < 5);
}
numbers(5);
