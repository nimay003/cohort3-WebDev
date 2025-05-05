const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const JWT_SECRET = "helloji";

const users = [];

app.use(express.json());

// using in token logics
// function generateToken(){
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//     let token = "";
//     for (let i = 0; i < 32; i++) {
//         token += options[Math.floor(Math.random() * options.length)];
//     }
    
//     return token;
// }

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(users.find(user => user.username === username)){
        res.json({
            message: "You are already signed-up"
        })
        return;
    }

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "Welcome! to our house"
    })

    console.log(users);
});

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(user => {
        if(user.username === username && user.password === password){
            return true;
        } else {
            return false;
        }
    });

    if(foundUser){
        // const token = generateToken(); // token logic 
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);

        // foundUser.token = token; // token logic

        res.json({
            message: "Welcome back",
            token: token
        })
    } else {
        res.status(401).json({
            message: "Invalid username or password"
        })
    }

    console.log(users);
});

app.get("/me", (req, res) => {
    const token = req.headers.token;
    const decodeInfo = jwt.verify(token, JWT_SECRET);
    // const founderUser = users.find(user => user.token === token); // token logic
    const founderUser = users.find(user => user.username ===decodeInfo.username);

    if(founderUser){
        res.send({
            username : founderUser.username
        })
    } else {
        res.status(401).json({
            message: "Kon hai be tu!"
        })
    }
})

app.listen(3000);