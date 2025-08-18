import express from "express"
import { ProtectedRoute } from "../middlewares/auth.middleware.js"
import { getMessages, sendMessage } from "../controllers/message.controllers.js"

const router = express.Router()


router.use(ProtectedRoute)


router.post("/sendMessage/:id", sendMessage )

router.get("/getMessages/:id", getMessages )


export default router