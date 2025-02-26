import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
// import path from 'path';

const app=express()




app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
// app.use(express.static(path.join(__dirname,'public')));
 

//routes

import userRouter from './routes/user.routes.js'



//routes declaration
app.use("/api/v1/users",userRouter)

// http://localhost:8000/api/v1/register
export{app}