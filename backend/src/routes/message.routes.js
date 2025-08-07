import express from "express"
import { ProtectedRoute } from "../middlewares/auth.middleware"
import { getMessages, sendMessage } from "../controllers/message.controllers"

const router = express.Router()


router.use(ProtectedRoute)


router.post("/sendMessage", sendMessage )

router.get("/getMessages", getMessages )


export default router