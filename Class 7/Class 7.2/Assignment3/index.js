const express = require("express");
const app = express();

let requestCount = 0;

function middle(req, res, next){
    requestCount++;
    next();
}

app.get("/", (req, res) => {
    res.send(`You send ${requestCount} many request`);
})

app.use(middle);

app.get("/request", (req, res) => {
    res.json({
        totalRequest : requestCount
    })
});

app.listen(3000);