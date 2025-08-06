import { User } from "../models/User.model.js";
import { FriendRequest } from "../models/FriendRequest.model.js";
import { Message } from "../models/Message.model.js";
import cloudinary from "../config/cloudinary.js";



export const getMessages = async()=>{
    try {
        if(!req.params.id){
            return res.status(400).json({ message:"Id not provided"})
        }
        const { id:friendId } = req.params
        const existsFriend = User.findOne({_id: friendId})
        if(!existsFriend){
            return res.status(404).json({ message:"User not found"})          
        }

        if(!req.user.friends.includes(friendId)){
             return res.status(400).json({ message:"Unathorized"})
        }

        const messages = Message.find({
            $or:[
                { messageReceiver: req.user._id , messageSender: friendId},
                { messageReceiver: friendId , messageSender: req.user._id},
            ]
        })

        res.status(201).json(messages)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error"})
    }
}
export const sendMessage = async()=>{
    try {
        if(!req.params.id){
            return res.status(400).json({ message:"Id not provided"})
        }
        const { id:friendId } = req.params
        const { text, image} = req.body
        const existsFriend = User.findOne({_id: friendId})
        if(!existsFriend){
            return res.status(404).json({ message:"User not found"})          
        }

        if(!req.user.friends.includes(friendId)){
             return res.status(400).json({ message:"Cannot message if you're not their friend"})
        }
        if(!text && !image){
            return res.status(400).json({ message:"Text or Image are required"})
        }

        let imageUrl;
        if(image){
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }

        const newMessage = Message.create({
            messageSender: req.user._id,
            messageReceiver: friendId,
            text,
            image: imageUrl
        })

        // to do real time 

        res.status(201).json(newMessage)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error"})
    }
}

