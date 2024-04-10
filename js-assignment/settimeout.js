/*JavaScript Program to Pass Parameter to a setTimeout() Function */

function setTime(params) {
  console.log("hello world");
}

setTimeout(setTime, 3000);
console.log("This message is shown first");
