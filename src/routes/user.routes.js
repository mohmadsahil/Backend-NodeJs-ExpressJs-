import { registerUser } from "../controllers/user.controller.js";
import express from "express"
import {upload} from "../middlewares/multer.middleware.js"



const router = express.Router();

// ******************* 

router.route("/register").post(
    upload.fields([             // Middleware (Multer) has Been Used
        {
            name:"avtar",
            maxCount:1
        },
        {
            name:"cover",
            maxCount:1
        }
    ]), 
    registerUser)


export default router;