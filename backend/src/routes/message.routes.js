import express from "express"
import { ProtectedRoute } from "../middlewares/auth.middleware"
import { getMessages, sendMessage } from "../controllers/message.controllers"

const router = express.Router()


router.use(ProtectedRoute)


router.post("/sendMessage/:id", sendMessage )

router.get("/getMessages/:id", getMessages )


export default router