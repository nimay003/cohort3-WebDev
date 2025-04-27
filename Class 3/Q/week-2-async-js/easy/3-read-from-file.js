import fs from "fs"; // const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
    if(err){
        console.error("Error reading file: ", err);
        return;
    }
    console.log("File content:- \n", data)
})

let sum = 0;
for (let i = 0; i < 1e9; i++) {
  sum += i;
}

console.log('Expensive operation done, sum:', sum);