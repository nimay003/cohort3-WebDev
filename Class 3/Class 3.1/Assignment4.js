const fs = require('fs'); //File System

const aFile = fs.readFileSync("a.txt", "utf8"); //Asynchronous read
console.log(aFile);

const bFile = fs.readFileSync("b.txt", "utf8"); //Synchronous read
console.log(bFile);