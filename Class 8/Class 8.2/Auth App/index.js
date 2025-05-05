const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const JWT_SECRET = "Helloji";

const users = [];

function auth(req, res, next){
    const token = req.headers.token;

    if(token){
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if(err){
                res.status(401).send({
                    message: "Auth: bhai tu signup kr phele"
                })
            } else {
                req.user = decoded;
                next();
            }
        })
    } else {
        res.status(401).send({
            message: "Auth: Bhai tu phele signup kr"
        })
    }
}

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(users.find(user => username === users.username)){
        res.json({
            message: "signup: Bhai tu signin kar"
        })
        return;
    }

    users.push({
        username : username,
        password : password
    });

    res.json({
        message: "signup: Signup ho gaya bhai"
    });
});

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(user => {
        return (user.username === username && password === user.password);
    });

    if(foundUser){
        const token = jwt.sign({
            username : username
        }, JWT_SECRET);

        res.header("token", token);

        res.json({
            message: "Signin: Welcome!",
            token : token
        })
    } else {
        res.status(401).json({
            message: "Signin: Kon hai be tu"
        })
    }
});

app.get("/me", auth, (req, res) => {
    const user = req.user;
    
    res.json({
        username: user.username
    });
});

app.listen(3000);