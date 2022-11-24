const express=require("express")
const bodyParser=require("body-parser")
const cors=require("cors")
const mongoose =require("mongoose")
const usersRouter=require("./routes/users")
const exerciseRouter=require("./routes/exercises")

require("dotenv").config()
const app=express()
const port =5000;
app.use(cors())
app.use(bodyParser.json());

const mongooseUrl="mongodb+srv://mern:mern@cluster0.np8zfrk.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongooseUrl,{
    useNewUrlParser:true,
 
})

const connection=mongoose.connection;
connection.once("open",()=>{
    console.log('MONGO DB connected established succesfully');
    
})

app.use("/exercises",exerciseRouter)
app.use("/users",usersRouter)

app.listen(port,()=>{
    console.log(`Server is runing ${port}`);

    
})