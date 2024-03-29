import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{ // database se Connect hone mai thoda time lgega sa that's why We have use async-await
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB Has Been Connected  HOST : ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log("MongoDB Connection Failed",error);
    }
}

export default connectDB;