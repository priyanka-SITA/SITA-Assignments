//JavaScript Program to Get File Extension

function fileExtension(filename) {
  var Extension = filename.split(".").pop();
  return Extension;
}
console.log(fileExtension("file.js"));
console.log(fileExtension("module.ts"));
console.log(fileExtension("module.html"));
