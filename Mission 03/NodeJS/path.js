const path = require("path");

const myPath = "D:/Next Level - 5/Mission 03/NodeJS/path.js";
const dirName = path.dirname(myPath);
const baseName = path.basename(myPath);
const extName = path.extname(myPath);

console.log(path.isAbsolute(myPath));
console.log(path.parse(myPath));

// console.log(path);
console.log(dirName);
console.log(baseName);
console.log(extName);
