import jwt from "jsonwebtoken";
import { User } from "../models/User.model.js";

export const ProtectedRoute = async(req, res, next)=>{
    try {
        const token = req.cookies.token

        if (!token){
            return res.status(401).json({message:"Unauthorized"})
        }

        const verifyToken = jwt.verify(token, process.env.Jwt_Secret_key)
        if(!verifyToken){
            return res.status(401).json({message:"Unauthorized"})
        }

        const user = await User.findOne({_id: verifyToken.id}).select("-password")
        req.user = user

        next()

    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Error in authorization"})
    }
}
