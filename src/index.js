import dotenv from "dotenv"; //Imported .env package
dotenv.config({ path:"./env"})
import express from "express"
import connectDB from "./db/connections.js";
const app = express()



connectDB();



