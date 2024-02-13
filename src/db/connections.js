import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("MongoDB Has Been Connected");
    }
    catch(error){
        console.log("MongoDB Error",error);
    }
}

export default connectDB;