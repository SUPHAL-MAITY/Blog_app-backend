import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"




const app=express()


const allowedOrigin=process.env.NODE_ENV==="production" ? "https://blog-app-frontend-blue-seven.vercel.app":"http://localhost:3001"


/// need to improve later 
app.use(cors({
    

    origin: allowedOrigin,  // Allow requests from your frontend's origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allow the methods you need   
    credentials: true,
}))

app.options('*', cors({
  origin: allowedOrigin,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));



app.use(cookieParser())
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))











///// router middlewares 

import testRouter from "./routes/test.routes.js"
import authRouter from "./routes/auth.routes.js"
import blogRouter from "./routes/blogs.routes.js"
import userRouter from "./routes/user.routes.js"


app.use("/api/v1",testRouter)
app.use("/api/v1",authRouter)
app.use("/api/v1/user",blogRouter)
app.use("/api/v1/admin",userRouter)







export {app}