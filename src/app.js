import express  from "express"; 
import cors from "cors";
import cookieParser from "cookie-parser" // We can access the cookies of user browser through our server

const app = express();

app.use(cors({              // we have to maijorly use of (.use) in middlewares
    origin: process.env.CORS_ORIGIN,
    method:["GET","POST","PUT","DELETE"]
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static("public")); // we have keep some public asset like images,favicon etc for the future
app.use(cookieParser()) 


//Routes

import userRouter from "./routes/user.routes.js"

//Routes Declartion

app.use("/api/v1/users",userRouter)







export{app} 
