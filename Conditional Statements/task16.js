/*Problem 20: For Loop + Nested If-Else Statement
Print all numbers from 1 to n using a for loop and check if each number is positive, negative, or zero using nested if-else statements.
Example:
For n = 5, print 1 2 3 4 5.
*/
/*function number(num) {
  for (i = 1; i <= 5; i++) {
    if (i > 0) {
      console.log(i + ": +ve number");
    } else if (i > 0) {
      console.log(i + ": -ve number");
    } else {
      console.log(i + ": 0 number");
    }
  }
}
number(5);
/*Problem 26: Nested If-Else + For Loop
Print all numbers from 1 to n. If a number is divisible by 3, print "Fizz", 
if a number is divisible by 5, print "Buzz", if a number is divisible by both 3 and 5, 
print "FizzBuzz".
Example:
For n = 5, print 1 2 Fizz 4 Buzz.
*/

/*function printNum(num) {
  for (i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

printNum(5);

/*Problem 27: Nested If-Else + While Loop
Print all numbers from 1 to n. If a number is divisible by 3, print "Fizz", if a number is divisible by 5, print "Buzz", if a number is divisible by both 3 and 5, print "FizzBuzz".
Example:
For n = 5, print 1 2 Fizz 4 Buzz.*/

function numbers(num) {
  var i = 0;
  while (i <= num) {
    if (i % 3 === 0 && i % 5 == 0) {
      console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
      console.log(i + "Fizz ");
    } else if (i % 5 === 0) {
      console.log(i + "buzz ");
    } else {
      console.log(i);
    }
    i++;
  }
}
numbers(5);
