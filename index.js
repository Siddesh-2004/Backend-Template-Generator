import * as fs from "node:fs";

const destinationPath = process.argv[2];
if (!destinationPath) {
  console.log("path is required as a command line argument");
  process.exit();
}
console.log("Installation started")
fs.cpSync("backend", destinationPath, { recursive: true }, (err) => {
  if (err) console.log(err);
});
console.log("Installation completed");
