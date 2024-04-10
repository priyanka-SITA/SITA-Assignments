//Check if a given number n is even or odd. If n is even, check if it is positive or negative. Print the corresponding message.
function evenOod(num) {
  if (num % 2 === 0) {
    if (num >= 0) {
      console.log("given number  is: even and  +ve number");
    } else {
      console.log("given number  is: even and  -ve number");
    }
  } else {
    if (num >= 0) {
      console.log("given number  is: odd and  +ve number");
    } else {
      console.log("given number  is: odd and  -ve number");
    }
  }
}
evenOod(-11);
