import express from "express"
import { ProtectedRoute } from "../middlewares/auth.middleware.js"
import { getMessages, sendMessage } from "../controllers/message.controllers.js"

const router = express.Router()


router.use(ProtectedRoute)


router.post("/sendMessage/:friendId", sendMessage )

router.get("/getMessages/:friendId", getMessages )


export default router