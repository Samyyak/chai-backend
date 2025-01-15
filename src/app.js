import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true                                     // For frontend backend communication

}))

app.use(express.json({limit: "16kb"}))         // For backend to accept a json file upto 16kb size
app.use(express.urlencoded({extended: true , limit: "16kb"}))        //For accepting data from url

app.use(express.static("public"))      // For keeping imgs,favions,etc in folder

app.use(cookieParser())


export { app }