const os = require("os");

console.log("System info \n");
console.log("\n" + "-".repeat(50) + "\n");

console.log("Platfrom Details: \n");
console.log("Platfrom: " , os.platform());
console.log("Architecture :" , os.arch());
console.log("OS type: " , os.type());
console.log("Os Release; ", os.release());
console.log("Hostname: " , os.hostname());

console.log("\nCPU infor: ");

const cpus = os.cpus();

console.log("CPU Model: " , cpus[0].model)
console.log("CPU Cores: " , cpus.length);
console.log("CPU Speed: ", cpus[0].speed);

console.log("-".repeat(50));

const totalMem = os.totalmem();
const freeMem = os.freemem();
console.log(
  "Total Memory : ",
  (totalMem / 1024 / 1024 / 1024).toFixed(2),
  "GB"
);
console.log("Free Memory : ", (freeMem / 1024 / 1024 / 1024).toFixed(2), "GB");

console.log("-".repeat(50));

const uptime = os.uptime();

const days = Math.floor(uptime / 86400);
const hours = Math.floor((uptime % 86400) / 3600);
const minutes = Math.floor((uptime % 3600) / 60);

console.log(`${days} days ${hours} hours ${minutes} minutes`);