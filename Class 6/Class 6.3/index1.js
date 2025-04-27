const express = require("express");

const app = express();

function sum(n){
    let ans = 0;
    for(let i = 1; i < n; i++){
        ans += i;
    }
    return ans;
}

// req = request, res = response
app.get("/", (req, res) => {
    const n = req.query.n;
    const ans = sum(n);
    res.send("Hey! your ans is " + ans);
})

app.listen(3000);
// ipconfig in cmd
// localhost:3000/?n=10