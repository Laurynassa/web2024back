
const connectToDB = require("./config/db.js");
const Client = require("./models/client.js");
require('dotenv').config();

const express = require("express");
const { res } = require("express");
const app = express();
app.get('/', function(req, res, next) {
    res.send("Hello world");
});

app.get("/user",)

app.post("/action",(res,req)=>{
    const userData = {
        name: req.body.name,
        password: req.body.password,
    }
    res.send(userData)
})


app.post("/api/v1/login", (req,res)=>{
    const client = new Client({
        clientEmail: req.body.email,
        clientPassword: req.body.password,
    });
    client.save();
    console.log(res.body);
    res.send(res.body);
})

app.post("/api/image/generate", async(req,res)=>{
    const word = req.query;

    try{
        if(!word){
            throw new Error("word parameter is missing")
        }

        const response = await fetch(
            "http://172.16.50.58:5000/api/image/generate"
        );
        const word = await response.json();

        const formattedData = filteredData.map((generate)=>{
            prompt: req.body.generate
        })
        res.json(formattedData);
    }catch(error) {
        res.status(400).json({error: error.message})
    }

    
});



connectToDB()

const PORT = 3000;
app.listen(PORT, () => {
  console.log("server is runing on port " + PORT);
});