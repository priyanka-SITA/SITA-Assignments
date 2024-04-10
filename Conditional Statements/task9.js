//Print all even numbers from 1 to n using a for loop and an if statement.

function evenNum(num) {
  for (i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
evenNum(20);
