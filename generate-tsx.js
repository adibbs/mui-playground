const fs = require("fs");
const path = require("path");
// The React components to load
const componentFolder = "./src/components/";

function writeJsxFile(dirPath = "", fileList = []) {
  const folderName = dirPath.split("\\").slice(-1)[0];
  const thisCompName = folderName[0].toUpperCase() + folderName.slice(1).split("-").join("") + "Container";
  const childCompList = fileList.map(filePath => filePath.split("\\").slice(-1)[0].split(".")[0]).filter(name => name[0] === name[0].toUpperCase());
  childCompList.sort(); // sort for consistency

  const jsx = [`import React from "react";`];
  childCompList.forEach(CompName => jsx.push(`import ${CompName} from "./${CompName}";`))
  jsx.push(`\nconst ${thisCompName} = () => {`);
  jsx.push("return (")
  jsx.push("<>")
  childCompList.forEach(CompName => jsx.push(
    `<h1>${CompName}</h1>
    <${CompName} />
    <br /><br />`));
  jsx.push("</>")
  jsx.push(");")
  jsx.push("};\n")
  jsx.push(`export default ${thisCompName};`)
  const jsxFile = jsx.join("\n");

  fs.writeFile(dirPath + "/index.tsx", jsxFile, "utf8", (err, data) => {
    if (err) {
      throw err;
    }
  });
}

/**
 * Explores recursively a directory and returns all the filepaths and folderpaths in the callback.
 *
 * @see http://stackoverflow.com/a/5827895/4241030
 * @param {String} dir
 * @param {Function} done
 */
function filewalker(dir, done) {
  let results = [];
  fs.readdir(dir, async (err, list) => {
    if (err) return done(err);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(file => {
      file = path.resolve(dir, file);
      fs.stat(file, async (err, stat) => {
        // If directory, execute a recursive call
        if (stat && stat.isDirectory()) {
          filewalker(file, (err, res) => {
            writeJsxFile(file, res);
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          // Check if is a Javascript file
          if (
            file.endsWith(".tsx")
          ) {
            results.push(file);
          }
          if (!--pending) done(null, results);
        }
      });
    });
  });
}
filewalker(componentFolder, (err, data) => {
  if (err) {
    throw err;
  }
  // done
});