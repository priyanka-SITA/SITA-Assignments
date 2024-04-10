/*Problem 16: While Loop + If-Else Statement
Print all numbers from 1 to n using a while loop and check if each number is even or odd using an if-else statement.
Example:
For n = 5, print 1 3 5.
*/

function evenOod(num) {
  i = 1;
  while (i <= num) {
    if (i % 2 === 0) {
      console.log(i + "even number");
    } else {
      console.log(i + "odd number");
    }
    i++;
  }
}
evenOod(5);
/*Problem 17: While Loop + If-Else-If Statement
Print all numbers from 1 to n using a while loop and check if each number is positive, negative, or zero using an if-else-if statement.
Example:
For n = 5, print 1 2 3 4 5.

*/
function number(num) {
  var i = 1;
  while (i <= num) {
    if (i > 0) {
      console.log(i + " :+ve number ");
    } else if (i < 0) {
      console.log(i + " :+ve number ");
    } else {
      console.log(i + " :0 number ");
    }
    i++;
  }
}
number(5);
