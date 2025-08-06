import express from "express"
import { ProtectedRoute } from "../middlewares/auth.middleware"

const router = express.Router()


router.use(ProtectedRoute)


router.post("/sendMessage", sendMessage)

router.get("/getMessages", getMessages)