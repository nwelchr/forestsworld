import fs from "fs";
import path from "path";

const srcPath = path.resolve("CNAME");
const destPath = path.resolve("dist", "CNAME");

fs.copyFileSync(srcPath, destPath);
console.log("CNAME file copied to dist/");
