import multer from "multer";

// We're using Disk Storage Here

const storage = multer.diskStorage({
    destination: function (req, file, cb) {         // cb--> CallBack
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  export const upload = multer({ 
    storage,
  })