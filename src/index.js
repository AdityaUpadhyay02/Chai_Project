// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import express from 'express'
import dotenv from 'dotenv'
import connectDB from "./db/index.js";
const app=express()

dotenv.config({
    path:'./env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port :${process.env.PORT}`);
    })
    app.on("error", (error)=>{
        console.log("ERRR: ", error);
        throw error  
    })

})
.catch((err)=>{
    console.log("MONGODB db connection fail !!",err);
})



// import express from 'express'
// const app=express();

// ( async ()=> {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error", (error)=>{
//             console.log("ERRR: ", error);
//             throw error 
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })


//     } catch(error){
//         console.error("ERROR: ",error);
//         throw err
//     }
// })
