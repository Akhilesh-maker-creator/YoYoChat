import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./db.js"
import { app, server } from "./src/config/socket.js"
import authRoutes from "./src/routes/auth.routes.js"
import friendRoutes from "./src/routes/friend.routes.js"
import cookieParser from "cookie-parser"

dotenv.config()
connectDB()

const PORT = process.env.PORT

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/friend", friendRoutes)


server.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
