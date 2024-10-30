const fs = require("fs");
const path = require("path");

function getAllFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

function checkFileUsage(dir) {
  const allFiles = getAllFiles(dir);
  const unusedFiles = [];

  allFiles.forEach((file) => {
    if (
      path.extname(file) === ".js" ||
      path.extname(file) === ".tsx" ||
      path.extname(file) === ".ts"
    ) {
      const content = fs.readFileSync(file, "utf8");
      const fileName = path.basename(file);
      const isUsed = allFiles.some((otherFile) => {
        if (otherFile !== file) {
          const otherContent = fs.readFileSync(otherFile, "utf8");
          return otherContent.includes(fileName);
        }
        return false;
      });
      if (!isUsed) {
        unusedFiles.push(file);
      }
    }
  });

  console.log("Potentially unused files:");
  unusedFiles.forEach((file) => console.log(file));
}

// Replace 'your_project_directory' with the path to your Next.js project
checkFileUsage("/Users/svenschneider/Desktop/webdev_projects/sec-consulting");
