import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: '15kb'}))
app.use(express.urlencoded({extended: true, limit: "15kb"}))
// extended refers to object ke andr v objected de skte hai kinda nested
app.use(express.static("public"))
app.use(cookieParser())
// cookie parser is generally used to access cookies from user server and also helps in setting or modifying cookies.


// routes import
import userRouter from './routes/user.routes.js'
import videoRouter from './routes/video.routes.js'

// routes declaration
app.use("/api/v1/users", userRouter)
app.use("/api/v1/videos", videoRouter)

// http://localhost:8000/api/v1/users/register
// http://localhost:8000/api/v1/videos/all-videos

export { app }