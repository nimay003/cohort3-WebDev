const express = require("express");

const app = express();

// https://localhost:3000/sum/1/4
app.get("/sum/:a/:b", (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    
    res.json({
        ans: (a + b)
    })
});

// https://localhost:3000/multiply?a=1&b=4
app.get("/multiply", (req, res) => {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: (a * b)
    })
});

app.get("/subtract/:a/:b", (req, res) => {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: (a - b)
    })
});

app.get("/devide", (req, res) => {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: (a / b)
    })
});

app.listen(3000);