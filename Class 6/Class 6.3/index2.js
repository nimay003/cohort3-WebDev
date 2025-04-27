const express = require("express");

const app = express();
app.use(express.json());

var users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}];

function checkKidneyseUnhalthy(){
    let result = false;
    for(let i = 0; i <users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            result = true;
        }
    }
    return result;
}

app.get("/", (req, res) => {
    const name = users[0].name;
    const johnKidneys = users[0].kidneys;

    // console.log(`Name is ${name}`);
    // console.log(`Kidneys is ${johnKidneys}`);

    const numOfKidneys = johnKidneys.length;
    let numOfHealthyKidneys = 0;

    for(let i = 0; i < numOfKidneys; i++){
        if(johnKidneys[i].healthy){
            numOfHealthyKidneys = numOfHealthyKidneys + 1;
        }
    }

    const numOfUnhealthyKidneys = numOfKidneys - numOfHealthyKidneys;

    res.json({
        numOfKidneys,
        numOfHealthyKidneys,
        numOfUnhealthyKidneys
    })
});

app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    });

    res.json({
        msg: "Done!"
    });
});

app.put("/", (req, res) => {
    if(checkKidneyseUnhalthy()){
        for(let i = 0; i < users[0].kidneys.length; i++){
            users[0].kidneys[i].healthy = true;
        };
        
        res.json({
            msg: "NOW! You are healthy"
        });
    } else {
        res.status(411).json({
            msg: "You are fine"
        })
    }
});

app.delete("/", (req, res) => {
    if(checkKidneyseUnhalthy()){
        const kidneys = users[0].kidneys;
        const newKidneys = [];
        
        for(let i = 0; i < kidneys.length; i++){
            if(kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                });
            }
        }
        
        users[0].kidneys = newKidneys;
        
        res.json({
            msg: "Unhealthy kidney is removed!",
            removeKidneys : removed
        });
    } else {
        res.status(411).json({msg: "No unhealthy kidneys is here!"});
    }
});

app.listen(3000);