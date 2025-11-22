const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "output", "messy-files");
const organizedDir = path.join(__dirname, "output", "organized");

const categories = {
  images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
  documents: [".pdf", ".doc", ".docx", ".txt", ".rtf"],
  videos: [".mp4", ".avi", ".mkv", ".mov", ".wmv"],
  audio: [".mp3", ".wav", ".flac", ".aac", ".ogg"],
  code: [".js", ".py", ".java", ".cpp", ".html", ".css"],
  archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
  spreadsheets: [".xls", ".xlsx", ".csv"],
  others: [],
};

const testFiles = [
  "vacation.jpg",
  "report.pdf",
  "presentation.pptx",
  "music.mp3",
  "video.mp4",
  "script.js",
  "data.csv",
  "archive.zip",
  "photo.png",
  "notes.txt",
  "app.py",
  "movie.avi",
  "song.wav",
  "backup.tar.gz",
  "random.xyz",
  "nodejs.zip",
];

function initializeDirectories() {
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true });

    testFiles.forEach((file) => {
      fs.writeFileSync(path.join(sourceDir, file), `content of ${file}`);
    });
  }

  console.log("Messy directory files are created");



  if(!fs.existsSync(organizedDir)){
      fs.mkdirSync(organizedDir, { recursive: true });
  }

  Object.keys(categories).forEach(categorie =>{
    const categoryPath = path.join(organizedDir , categorie);
    if(!fs.existsSync(categoryPath)){
        fs.mkdirSync(categoryPath)
    }
  })

}



function getCategory(filename) {
  const ext = path.extname(filename).toLowerCase(); // ".pdf", ".jpg"
  // [images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"]],
  for (const [category, extensions] of Object.entries(categories)) {
    if (extensions.includes(ext)) {
      return category;
    }
  }
  return "others";
}


function organizeFiles (){



    console.log("File organized");

    console.log("Source: ", sourceDir);
    console.log("Destination" , organizeFiles);
    console.log("\n"+ "-".repeat(50) +"\n");


    const files = fs.readFileSync(sourceDir)

    if(files.length == 0){
        
    }










}