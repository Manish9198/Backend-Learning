import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db/db.js";

dotenv.config();

const port=process.env.PORT;

const app = express();

try{
    await connectDb();
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`); 
    });
}catch(err){
    console.log(err);
}