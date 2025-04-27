// Create a command line interface that lets the user specify a file path and the nodejs process counts the number of words inside it.
// Input - node index.js /Users/kirat/file.txt
// Output - You have 10 words in this file

const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

program
    .name("counter")
    .description("CLI to do file based tasks")
    .version("0.8.0");

program.command("count_words")
    .description("Count the number of lines in a files")
    .argument("<File>", "File to count")
    .action((file) => {
        fs.readFile(file, "utf-8", (err, data) => {
            if(err){
                console.log(err);
            } else {
                const lines = data.split(" ").length;
                console.log(`Number of words : ${lines}`);
            }
        });
    });

program.command("count_lines")
    .description("Count the lines of lines in a files")
    .argument("<File>", "File to count")
    .action((file) => {
        fs.readFile(file, "utf-8", (err, data) => {
            if(err){
                console.log(err);
            } else {
                const lines = data.split("\n").length;
                console.log(`Number of words : ${lines}`);
            }
        });
    });

program.parse();

