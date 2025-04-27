const fs = require("fs");

function cleanFileSpace(filename) {
    fs.readFile(filename, "utf-8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }

        console.log("Before Cleaning Space:\n" + data); 

        const cleanedData = data.trim();

        fs.writeFile(filename, cleanedData, "utf-8", (err) => {
            if (err) {
                console.error("Error writing file:", err);
                return;
            }

            console.log("After Cleaning Space:\n", cleanedData); 
        });
    });
}

cleanFileSpace("a.txt");