const path = require("path");

console.log("Current file info : \n");
console.log("filename " , __filename);
console.log("directory " , __dirname);


console.log("\n" + "-".repeat(50) + "\n");

const filePath = "/rahe/document/nextLevel.pdf";

console.log("Analiyzing Path" , filePath , "\n")

console.log("directory " , path.dirname(filePath))

console.log("Bane name" , path.basename(__filename))
console.log("file extention " , path.extname(filePath))
console.log("File name" , path.basename(filePath , path.extname(filePath)))

console.log("\n" + "-".repeat(50) + "\n");


const parsed = path.parse(filePath);
console.log("Parsed path obj" , parsed)

console.log("\n" + "-".repeat(50) + "\n");
console.log("formated path" , path.format(parsed));