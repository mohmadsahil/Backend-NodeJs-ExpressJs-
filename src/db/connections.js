import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB Has Been Connected ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log("MongoDB Error",error);
    }
}

export default connectDB;