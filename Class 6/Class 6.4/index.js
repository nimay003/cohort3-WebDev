const express = require("express");
const app = express();

// normal function
function isOld(age){
    if(req.query.age > 17){
        return true;
    } else {
        return false;
    }
}

// Middleware
function oldEnough(req, res, next){
    const age = req.query.age;
    if(age > 17){
        next();
    } else {
        res.status(411).json({
            msg: "Sorry, I can not allow you" 
         })
    }
}

// With normal function
app.get("/ride1", (req, res) => {
    if(isOld(req.query.age)){
        res.json({
           msg: "You can ride, Ride1" 
        })
    } else {
        res.status(411).json({
           msg: "Sorry, You can not ride, Ride1" 
        })
    }
})

// app.use(oldEnough);

// With Middleware
app.get("/ride2", oldEnough, (req, res) => {
    res.json({
        msg: "You can ride, Ride2" 
    })
})

app.listen(3000);