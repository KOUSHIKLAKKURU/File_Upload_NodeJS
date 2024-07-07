const mongoose=require("mongoose");
require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(console.log("DB Connection Successfully"))
    .catch((err)=>{
        console.log("DB Connection Issues");
        console.error(err);
        process.exit(1);
    });
}

module.exports=dbConnect;