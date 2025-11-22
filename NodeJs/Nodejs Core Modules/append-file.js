const fs = require("fs");


// fs.writeFileSync("./output/app.log" ,"application started \n")
// console.log("file append")

const logEntry1 = `${new Date().toISOString()} user loggen\n`;
fs.appendFileSync("./output/app.log" , logEntry1)

// const logEntry2 = `${new Date().toISOString()} user process data\n`;
// fs.appendFileSync("./output/app.log" , logEntry2)