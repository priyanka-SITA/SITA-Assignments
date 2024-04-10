/*Problem 10: While Loop + If Statement
Print all numbers from 1 to n using a while loop and an if statement.
Example:
For n = 5, print 1 2 3 4 5.
*/

function numbers(num) {
  let i = 1;
  while (i <= num) {
    if (i === num) {
      console.log(i);
    } else {
      console.log(i);
    }
    i++;
  }
}
numbers(3);
