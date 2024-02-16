import {v2} from "cloudinary"
import fs from "fs" // fs--> file sharing [will work as a file handling]

//Cloudinary Configuration

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async(localFilePath)=>{
    try {
        if(!localFilePath){
            console.log("Not Found the File Path");
            //upload the file on cloudinary
            await cloudinary.uploader.upload(localFilePath,{
                resource_type:"auto" //Automatically detect the file type
            })
            //file has been uploaded successfully
            console.log("file has been uploaded on cloudinary");
        }
    } catch (error) {
        fs.unlinkSync(localFilePath)    // Remove the locally saved temporary file as the upload operation got failed
        return null
    }
}

export {uploadOnCloudinary}