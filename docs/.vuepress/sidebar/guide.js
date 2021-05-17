"use strict";
var fs = require("fs");
function toToc(dir) {
  let fileNames = fs.readdirSync(dir);
  let names = [];
  for(let i in fileNames) {
    let name = fileNames[i]
    if (name !== "README.md"){
      names.push(fileNames[i]);
    }
  }
  names.unshift("");
  return names;
}
module.exports.JSGuide = function (groupA, dirName) {
  var names = toToc(dirName);
  return [
    {
      title: groupA,
      collapsable: false,
      children: names,
    },
  ];
};

module.exports.AndroidGuide = function (groupA) {};
