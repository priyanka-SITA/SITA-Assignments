//JavaScript Program To Perform Intersection Between Two Arrays

function intersection(arr1, arr2) {
  var arr3 = [];

  for (var i = 0; i <= arr1.length; i++) {
    var currentElement = arr1[i];

    if (arr2.includes(currentElement) && !arr3.includes(currentElement)) {
      arr3.push(currentElement);
    }
  }
  return arr3;
}

console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));
