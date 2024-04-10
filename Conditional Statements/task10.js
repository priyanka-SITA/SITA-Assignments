//Print all numbers from 1 to n using a for loop and check if each number is even or odd using a nested if statement.

function printAllNum(num) {
  for (i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(i + "is even number");
    } else {
      console.log(i + "is odd number");
    }
  }
}
printAllNum(5);
