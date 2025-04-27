const fs = require('fs');

fs.readFile("a.txt", "utf-8", (err, output) =>{
    console.log(output);
});

fs.readFile("b.txt", "utf-8", (err, output) =>{
    console.log(output);
});

fs.readFile("c.txt", "utf-8", (err, output) =>{
    console.log(output);
});