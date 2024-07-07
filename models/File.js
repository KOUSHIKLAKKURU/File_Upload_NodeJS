const mongoose=require("mongoose");
const nodemailer=require("nodemailer");
require("dotenv").config();

const fileSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
    },
    tags:{
        type:String,
    },
    email:{
        type:String,
    }
});

//post middleware
fileSchema.post("save",async function(doc){
    try{
        console.log("doc",doc);
 
        let transporter=nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                password:process.env.MAIL_PASS
            },
        });

        let info=await transporter.sendMail({
            from:`Code Help - by Koushik`,
            to:doc.email,
            subject:`New File Uploaded on Cloudinary`,
            html:`<h2>Hello Sir</h2><p>File Uploaded</p>`,
        })
        console.log("info",info);
    }
    catch(err){
        console.error(err);
    }
})

const File=mongoose.model("File",fileSchema);
module.exports=File;