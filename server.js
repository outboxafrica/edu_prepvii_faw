const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const route=require("./routes/post")

dotenv.config()


const app=express()

app.use(express.json())

app.use(route)

// app.get("/",(req,res)=>{
//     res.status(200).send("hello world")
// })
mongoose.connect(process.env.local,{useNewUrlParser:true,
useUnifiedTopology:true,useFindAndModify:false})

var db=mongoose.connection

db.once("open",()=>{
    console.log("db up and running")
})

db.on("error",()=>{
    console.log("connection failed")
})

// app.post("/",(req,res)=>{
//     res.status(200).send("the earth and hell")
// })

app.put("/",(req,res)=>{
    res.status(200).send("mars")
})

app.delete("/delete",(req,res)=>{
    res.status(200).send("venus")
})

app.listen(5000,()=>{
    console.log(`we are listening on port 3000`)
})
