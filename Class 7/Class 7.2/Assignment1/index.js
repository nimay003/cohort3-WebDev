const express = require("express");
const app = express();

function logRequest(req, res, next) {
    console.log(`Request made to: ${req.url}`);
    next();
}

app.get('/special', logRequest, (req, res) => {
    res.send('This route uses route-specific middleware!');
});

app.get("/sum", function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.listen(3000);