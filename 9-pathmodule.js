const path = require("path");

console.log(path.sep);

//path join

const filePath = path.join("/content", "subcontent", "test.txt");
console.log(filePath);

// like i only want last one base name ie test.txt

const base = path.basename(filePath);
console.log(base);

//to get absolute path

const absolute = path.resolve(__dirname, "content", "subcontent", "test.txt");
console.log(absolute);
