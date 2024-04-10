/*Problem 30: Nested If-Else + For Loop + Do While Loop
Print all numbers from 1 to n. If a number is divisible by 3, print "Fizz", if a number is divisible by 5, print "Buzz", if a number is divisible by both 3 and 5, print "FizzBuzz".
Example:
For n = 5, print 1 2 Fizz 4 Buzz.
*/

function numbers(num) {
  i = 0;
  do {
    for (i = 1; i <= num; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        console.log(" fizzbuzz");
      } else if (i % 3 === 0) {
        console.log("fizz");
      } else if (i % 5 === 0) {
        console.log("buzz");
      } else {
        console.log(i);
      }
    }
    i++;
  } while (i <= num);
}

numbers(10);
