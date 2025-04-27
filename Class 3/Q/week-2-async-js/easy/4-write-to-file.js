import fs from "fs";

let content = "This is some sample content written by Nimay. \nLearning async operations in Node.js is fun! \nKeep grinding and you'll master backend too. \n🚀🔥";

fs.writeFile("a.txt", content, "utf-8", (err, data) => {
    if(err){
        console.log("Error:- ", err);
        return;
    }
    console.log("Done!");
});