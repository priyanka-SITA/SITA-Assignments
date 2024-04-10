/* JavaScript Program to Illustrate Different Set Operations*/

function union(a, b) {
  let unionSet = new Set(a);
  for (let i of b) {
    unionSet.add(i);
  }
  return unionSet;
}
var arr1 = ["apple", "orange", "banana"];
var arr2 = ["grapes", "mango", "apple"];

result = union(arr1, arr2);

console.log(result);
