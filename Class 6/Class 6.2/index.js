const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/abc", (req, res) => {
    res.send("Hello World from ABC.");
});

app.post("/abc", (req, res) => {
    res.send("<b>Hello World from post world</b>");
});

app.listen(3000);