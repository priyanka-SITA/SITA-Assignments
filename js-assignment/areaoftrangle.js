function isAreaTriangle(s1, s2, s3) {
  var s = (s1 + s2 + s3) / 2;
  var areaValue = Math.floor(Math.sqrt(s * (s - s1) * (s - s2) * (s - s3)));
  return areaValue;
}
console.log(isAreaTriangle(8, 4, 9));
