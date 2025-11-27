import express from "express"
import { deleteUser, getAllUsers, getUser, getUserById, login, logout, signUp, updateUser } from "../controllers/auth.controllers.js"
import { ProtectedRoute } from "../middlewares/auth.middleware.js"
import { body,validationResult} from "express-validator"


const router = express.Router()

router.get("/getUsers",ProtectedRoute, getAllUsers)

router.post("/getUser",ProtectedRoute, getUser)
router.post("/getUserById",ProtectedRoute, getUserById)

router.post("/signUp", [
  body('name', 'Enter a valid name').isLength({ min: 5 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 6 })], signUp)

router.post("/login",[
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], login)

router.post("/logout",ProtectedRoute, logout)

router.put("/updateUser",
  [body('name', 'Enter a valid name').isLength({ min: 5 }),
  body('bio', 'Enter a valid bio').isLength({ min: 10 })],ProtectedRoute, updateUser)

router.delete("/deleteUser",ProtectedRoute, deleteUser)

router.get("/checkAuth",ProtectedRoute,(req,res)=>{
    try {
        const user = req.user
        res.status(201).json(user)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message:"Error in auth checking"})
    }
})


export default router