import dotenv from "dotenv"; //Imported .env package
dotenv.config({ path:"./env"})
import express from "express"
import connectDB from "./db/connections.js";
const app = express()


connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`App is Listning on ${process.env.PORT}`);
    });
})
.catch((err)=>{
    console.log("MONGO DB CONNECTION FAILED !!!",err);
})