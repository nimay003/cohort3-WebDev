const express = require('express');
const { UserModel, TodoModel } = require("./db.js");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Abcdxyz@123";
const bcrypt = require("bcrypt");
import { z } from "zod";

const app = express();
mongoose.connect("mongodb+srv://edunimay003:eS7UqxaLjS5wBLuP@cluster0.g5uvgrb.mongodb.net/todo-app");
app.use(express.json());

function auth(req, res, next){
    const token = req.headers.token;

    const decodeToken = jwt.verify(token, JWT_SECRET);
    if(decodeToken){
        req.userId = decodeToken.id;
        next();
    } else {
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
}

app.post("/signup", async (req, res) => {
    const requireBody = z.object({
        username: z.string().min(3).max(100),
        email: z.email().min(3).max(100).email(),
        password: z.string().min(8).max(30),
    })
    const parsedData = requireBody.safeParse(req.body);
    if(!parsedData.success){
        res.status(403).json({
            message: "Please! correct your format",
            error: parsedData.error
        })
        return;
    }

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 5);
        
    await UserModel.create({
        username: username,
        email:email,
        password: hashedPassword,
    })

    res.json({
        message: "User created successfully"
    })
});

app.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
    });
    
    if(!user){
        res.status(403).json({
            message: "User doesn't found"
        })
    }  

    const matchedPassword = await bcrypt.compare(password, user.password);

    if(matchedPassword){
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET);
        res.json({
            message: "Login Sucessful",
            token: token
        })
    } else {
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
});

app.post("/todo", auth, (req, res) => {
    const userId = req.userId;
    const title = req.headers.title;
    const done = req.headers.done;

    TodoModel.create({
        title,
        userId,
        done
    });

    res.json({
        userId: userId,
        message: "Todo created"
    });
});

app.get("/todos", auth, async (req, res) => {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId: userId
    });

    res.json({
        todos
    });
});

app.listen(3000);