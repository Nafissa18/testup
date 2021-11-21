const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config()

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/api/wordcount",(req,res)=>{
        let word = req.body.word;
        let wordcount = word.length;
        return res.status(200).json({
                success: true,
                response: `${word} has a ${wordcount} character.`
        })
})

app.listen(process.env.PORT_APP,()=>{
console.log(`your server running on port ${process.env.PORT_APP}`);
})
