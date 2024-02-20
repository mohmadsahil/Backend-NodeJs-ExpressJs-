import {asyncHandler} from "../utils/asyncHandler.js"
import {Apierror} from "../utils/Apierror.js"
import {User} from "../models/user.model.js"
// import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {Apiresponse} from "../utils/Apiresponse.js"
import mongoose from "mongoose"
// import { Jwt } from "jsonwebtoken"

const registerUser = asyncHandler(async(req,res)=>{
     const {fullname,username,email,password} = req.body
     console.log("email :",email);

     if(fullname===""){
       throw new Apierror(400,"Full Name is Required")
     }
     if(email===""){
       throw new Apierror(400,"Email is Required")
     }
     if(username===""){
       throw new Apierror(400,"username is Required")
     }
     if(password===""){
       throw new Apierror(400,"password is Required")
     }

       // ****CHECKING USER EXISTES******

     const existedUser = await User.findOne({
       $or:[{ email } ,{ username }]        // will check the existed user through Email and Username
     })
     if(existedUser){
       throw new Apierror(409,"User is Already Register");
     }

     const avatarLocalPath = req.files?.avatar[0]?.path;       //files is the Function provided by Multer
     const coverImgLocalPath = req.files?.coverImage[0]?.path;

     if(!avatarLocalPath){
       throw new Apierror(400,"Avatar file is Required");
     }

     const avatar = await uploadOnCloudinary(avatarLocalPath)
     const coverImage = await uploadOnCloudinary(coverImgLocalPath)

     if(!avatar){
       throw new Apierror(400,"Avatar file is Required");
     }

     const user = await User.create({
       fullname,
       avatar : avatar.url,
       coverImage: coverImage?.url || ""  ,      //Cover Image is not required that's why we have checcking the Code Here Through "?"
       email,
       password,
       username:username.toLowerCase()
     })

     const createdUser = await User.findById(user._id).select("-password -refreshToken")   // Throught Select --> we will not get the particular fields if we dont Want(password,refreshToken)
     if(!createdUser){
       throw new Apierror(500,"Something Went Wrong During Registration")
     }

     return res.status(201).json(
       new Apiresponse(200,createdUser,"User Register Successfully")
     )

})

export{registerUser}