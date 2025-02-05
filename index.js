import express from "express"
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use((req,res,next)=>{
    
    let token = req.header ("Authorization")
    //console.log(token)
    if(token!=null){
        token=token.replace("Bearer ","");
        jwt.verify(token,process.env.JWT_SECRET,
            (err,decoded)=>{
            if(!err){
                req.user = decoded;
            }
            });
        
    }
    next()
})

let mongoUrl= process.env.MONGO_URL;

mongoose.connect(mongoUrl)

const connection = mongoose.connection
connection.once("open",()=>{
    console.log("MongoDB connection established sucsessfully.")
})

app.use("/api/users",userRouter)


app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000")
})