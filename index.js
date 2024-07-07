const express=require("express");
const fileupload=require("express-fileupload");
const app=express();
require("dotenv").config();

const PORT=process.env.PORT || 3000;

app.use(express.json());
app.use(fileupload({
    useTempFiles:true,
    tempFileDir:'/tmp/'
}));

const dbConnect=require("./config/database");
dbConnect();
const cloudinaryConnect=require("./config/cloudinary");
cloudinaryConnect();

const Upload=require("./routes/fileUpload");
app.use("/api/v1/upload",Upload);

app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`);
});