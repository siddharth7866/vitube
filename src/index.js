import dotenv from "dotenv"
import mongoose from "mongoose"
// import DB_NAME from "./constants"
// import  express  from "express"
import connectDB from "./db/index.js"

dotenv.config({path:'./env'})
connectDB()


/*
//We will be using IIFE for conecting data base and there are mainly DB takes time to response

const app=express()
(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("error:",error)
            throw error
        })
        app.listen(proces.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("ERROR:",error)
        throw err
    }
})()


*/