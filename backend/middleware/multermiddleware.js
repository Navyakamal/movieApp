const multer=require('multer')

//storage configuration
const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'uploads')
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}-${file.originalname}`)
    }
})

//create multiware
const upload=multer({storage})
module.exports = upload;
