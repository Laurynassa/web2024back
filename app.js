require('dotenv').config()
const express = require('express')
const connectToDB = require("./config/db.js");
const Client = require("./models/client.js")


const app = express()
app.use(express.json())
console.log(Client)

app.get("/api/v1/login", (req,res)=>{
    const client = new Client({
        clientEmail: req.body.clientEmail,
        clientPassword: req.body.clientPassword,
    });
    client.save();
    console.log(req.body);
    res.send(req.body);

})

app.get("/api/v1/list",async (req,res)=>{
    const {list} = req.query;

    // try{
    //     if(!list) {
    //         throw new Error("List is missing")
    //     }

    //     const response = await fetch(``);

    //     const data = await response.json();

    //     const formattedData = data.
    // }


})

connectToDB()

app.listen(process.env.PORT || 8000, () => {
    console.log("Server is tuning on http://localhost:3000/ ");
  });