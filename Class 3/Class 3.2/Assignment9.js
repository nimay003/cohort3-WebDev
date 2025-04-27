const fs = require("fs").promises;

async function cleanFile(filename) {
    try {
        let data = await fs.readFile(filename, "utf-8");
        console.log("Before Cleaning:\n", data); 

        let cleanedData = data.trim();

        await fs.writeFile(filename, cleanedData, "utf-8");

        console.log("After Cleaning:\n", cleanedData);
    } catch (error) {
        console.error("Error:", error);
    }
}

cleanFile("a.txt");