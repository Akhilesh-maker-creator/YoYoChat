import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./db.js"
import { app, server } from "./src/config/socket.js"
import authRoutes from "./src/routes/auth.routes.js"
import friendRoutes from "./src/routes/friend.routes.js"
import messageRoutes from "./src/routes/message.routes.js"
import cookieParser from "cookie-parser"
import cors from "cors"

import path from "path";

dotenv.config()
connectDB()

const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/friend", friendRoutes)
app.use("/api/message", messageRoutes)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));
  app.get(/(.*)/, (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'dist', 'index.html'));
  });
}
server.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
