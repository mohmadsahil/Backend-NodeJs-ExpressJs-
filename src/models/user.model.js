import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema =new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String,
        required:true,
    },
    coverImage:{
        type:String,
    },
    watchHistory:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Video",
    }],
    password:{
        type:String,
        required:true,
    },
    refreshToken:{
        type:String,
    }

},{timestamps:true}) 

export const User = mongoose.model("User",userSchema);  


//Password Encrypt

userSchema.pre("save",async function(next){
    if(this.isModified("password"))
    {
        this.password = bcrypt.hash(this.password,10)   //Password Would be Encry between 10 Numbers
        next();
    }
})

//Compare Password during login

userSchema.methods.isPasswordCorrect = async function(password)
{
    return await bcrypt.compare(password,this.password)
}