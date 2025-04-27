// Create a `cli` that lets a user
// 1. Add a todo
// 2. Delete a todo
// 3. Mark a todo as done
// Store all the data in files (todos.json)

const { Command } = require("commander");
const program = new Command();
const fs = require("fs");

program
    .name("todo")
    .description("Work like a todo in CLI")
    .version("0.8.0");

program.command("add")
    .description("Count the number of lines in a files")
    .argument("<File>", "File to count")
    