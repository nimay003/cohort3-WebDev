const express = require("express");
const app = express();

function getInfo(req, res, next){
    console.log(`Method is ${req.method}`);
    console.log(`Host is ${req.hostname}`);
    console.log(`Route is ${req.url}`);
    console.log(new Date());
    next();
}

app.use(getInfo);

app.get("/sum/:a/:b", function (req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        ans: a + b
    })
});

app.listen(3000);