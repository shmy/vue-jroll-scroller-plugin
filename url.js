const mime = require("mime");
const { resolve } = require("path");
const { readFileSync } = require("fs");
var pattern = /url\((.+?)\)/ig;
const results = [];

module.exports = (src) => {
  let r = "";
  while (r = pattern.exec(src)) {
    const path = resolve(__dirname, "src/", r[1]);
    const mimeType = mime.lookup("png");
    let value = readFileSync(path).toString("base64");
    value = `data:${mimeType};base64,${value}`;
    results.push({ from: r[1], to: value });
  }
  return results;
};
