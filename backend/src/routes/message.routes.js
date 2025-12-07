import express from "express"
import { ProtectedRoute } from "../middlewares/auth.middleware.js"
import { generateVideoToken, getMessages, sendMessage } from "../controllers/message.controllers.js"
import upload from "../middlewares/upload.js"

const router = express.Router()


router.use(ProtectedRoute)


router.post("/sendMessage/:friendId",upload.single("image"), sendMessage )

router.get("/getMessages/:friendId", getMessages )

router.post("/video/token",generateVideoToken)

export default router