//JavaScript Program to Remove Specific Item From an Array

function removeElement(array, n) {
  const index = array.indexOf(n);

  // if the element is in the array, remove it
  if (index > -1) {
    // remove item
    array.splice(index, 1);
  }
  return array;
}

console.log(removeElement([1, 2, 3, 4, 5], 4));
