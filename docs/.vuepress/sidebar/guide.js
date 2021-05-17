"use strict";
const fs = require("fs");

function toToc(dir) {
  let fileNames = fs.readdirSync(dir);
  let names = [];
  for (let i in fileNames) {
    let name = fileNames[i];
    let path = dir + "/" + name;
    if (fs.statSync(path).isDirectory()) {
      continue;
    }
    if (name !== "README.md"){
      names.push(fileNames[i].split(".")[0]);
    }
  }
  names.unshift("");
  return names;
}

module.exports.JSGuide = function (groupA, dirName) {
  let names = toToc(dirName);
  return [
    {
      title: groupA,
      collapsable: false,
      children: names,
    },
  ];
};

module.exports.AndroidGuide = function (groupA) {};
