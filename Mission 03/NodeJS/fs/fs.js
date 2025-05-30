const fs = require("fs");
// import { appendFile, writeFile } from "fs";

// console.log(fs);

// Sync;
// console.log("1");
// fs.writeFileSync("text.md", "Hello World  !!");
// console.log("2");
// fs.writeFileSync("text.md", "How Are You ?? \n");
// console.log("3");
// fs.appendFileSync("text.md", "How You Are Again !!");

// console.log("Hi As Sync !");

// Async;
console.log("1");
fs.writeFile("text.md", "Hello World  !!", () => {
  console.log("Callback 1");
});
console.log("2");
fs.writeFile("text.md", "How Are You ?? \n", () => {
  console.log("Callback 2");
});
console.log("3");
fs.appendFile("text.md", "How You Are Again !!", () => {
  console.log("Callback 3");
});

console.log("Hi As Sync !");

fs.readFile("text.md", (err, data) => console.log(data.toString()));
