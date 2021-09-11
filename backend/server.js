import express from "express";
import mongoose from "mongoose";
import {} from "dotenv/config";
import Messages from "./messagesDB.js";


// app config

const app = express();
const port = process.env.PORT || 5000

//middleware
app.use(express.json())


// db config

const connectionURL =  `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.45n1b.mongodb.net/whatsappDB?retryWrites=true&w=majority`
mongoose.connect(connectionURL,
    {
   useNewUrlParser:true,
   useUnifiedTopology:true
});


// api routes

app.get("/",(req,res)=>{
    res.status(500).send("Hello ")
})

app.get("/messages/sync",(req,res)=>{

    Messages.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

app.post("/messages/new",(req,res)=>{

    const dbMessage  = req.body

    Messages.create(dbMessage,(err,data)=>{

        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })

})

// Listener
app.listen(port,()=>{
    console.log("Server running at "+ port);
})