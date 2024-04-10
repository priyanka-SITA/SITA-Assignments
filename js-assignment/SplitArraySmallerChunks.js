function smallerChunks(arr, chunk) {
  for (var i = 0; i < arr.length; i += chunk) {
    var tempValue;
    tempValue = arr.slice(i, i + chunk);
    console.log(tempValue);
  }
}
var array = [1, 2, 3, 4, 5, 6, 7, 8];
var chunks = 2;
smallerChunks(array, chunks);
