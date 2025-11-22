const { error } = require("console");
const fs = require("fs");

fs.writeFileSync("./output/temp.txt", "this is temp");

if (fs.existsSync("./output/temp.txt")) {
  fs.unlinkSync("./output/temp.txt");
  console.log("file deleted");
}

try {
  fs.unlinkSync("./output/temp.txt");
} catch (err) {
  console.error("Error", err.message);
}

fs.writeFile("./output/temp2.txt", "this is temp 2", (err) => {
  if (err) return console.error(err.message);

  console.log("Another temp created");
  fs.unlink("./output/temp2.txt", (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("temp 2 deleted");
    }
  });
});
