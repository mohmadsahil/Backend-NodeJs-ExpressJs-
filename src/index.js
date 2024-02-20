import dotenv from "dotenv"; //Imported .env package
dotenv.config({ path:"./.env"})
import connectDB from "./db/connections.js";
import {app} from "./app.js"
import { Router } from "express";

app.use(Router())

connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`App is Listning on ${process.env.PORT}`);
    });
})
.catch((err)=>{
    console.log("MONGO DB CONNECTION FAILED !!!",err);
})