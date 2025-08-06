import express from "express"
import { ProtectedRoute } from "../middlewares/auth.middleware.js"
import { acceptFriendRequest, getFriends, incomingFriendReq, outgoingFriendReq, sendFriendRequest } from "../controllers/friend.controllers.js"

const router = express.Router()


router.use(ProtectedRoute)

router.get("/getFriends", getFriends)

router.post("/sendFriendRequest/:id",sendFriendRequest)

router.post("/acceptFriendRequest/:id",acceptFriendRequest) // id is friend request id


router.get("/outgoingFriendReq", outgoingFriendReq)

router.get("/incomingFriendReq", incomingFriendReq)

export default router