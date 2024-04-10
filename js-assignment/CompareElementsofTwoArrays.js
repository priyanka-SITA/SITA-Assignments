//JavaScript Program to Compare Elements of Two Arrays

function compareElements(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  } else {
    var result = false;
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false;
      } else {
        result = true;
      }
    }
    return result;
  }
}
var result = compareElements([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5]);

if (result === true) {
  console.log("The arrays have the same elements.");
} else {
  console.log("The arrays have different elements.");
}
