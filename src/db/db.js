import mongoose from "mongoose";

export const connectDb=async()=>{
  try{
    const connectionDB=await mongoose.connect(process.env.MONGODB_URI);
    console.log(connectionDB.connection.host);
    console.log("database connected successfully");
  }catch(err){
    console.log(err);
  }
}