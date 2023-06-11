const mongoose=require("mongoose");
require("dotenv").config();

const connection=mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log(`Successfully connected to Port ${process.env.PORT}`))
.catch((error)=> console.log(error))

module.exports={
    connection,
}
