const { readFileSync, writeFileSync, read } = require("fs");

//same as
// const fs = require('fs');
// fs.readFileSync

//readFileSync takes 2 parameters 1-> path and second is encoding

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

// writeFilesync takes 2 parameters 1-> path if there is no file then node will make one 2->value we wanna pass
//flag =a node will append this

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second} `,
  { flag: "a" }
);
