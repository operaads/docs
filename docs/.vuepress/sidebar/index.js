"use strict";

const fs = require("fs");
const path = require("path");

module.exports.listMarkdowns = function (dir, prefix = "") {
  const names = [];

  const fileNames = fs.readdirSync(dir);
  for (let i in fileNames) {
    const name = fileNames[i];

    const dirName = path.join(dir, name);
    if (fs.statSync(dirName).isDirectory()) {
      continue;
    }

    if (name === "README.md") {
      // empty string is README.md
      names.unshift(prefix);
    } else {
      names.push(prefix + name.substring(0, name.lastIndexOf(".")));
    }
  }

  return names;
};
