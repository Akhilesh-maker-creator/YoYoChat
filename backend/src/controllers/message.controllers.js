import { User } from "../models/User.model.js";
import { FriendRequest } from "../models/FriendRequest.model.js";
import { Message } from "../models/Message.model.js";
import cloudinary from "../config/cloudinary.js";
import { userSocketMap,io } from "../config/socket.js";

export const getMessages = async (req, res) => {
  try {
    if (!req.params.friendId) {
      return res.status(400).json({ message: "Id not provided" });
    }
    const { friendId } = req.params;
    const existsFriend = await User.findOne({ _id: friendId });
    if (!existsFriend) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!req.user.friends || !req.user.friends.includes(friendId)) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    const messages = await Message.find({
      $or: [
        { messageReceiver: req.user._id, messageSender: friendId },
        { messageReceiver: friendId, messageSender: req.user._id },
      ],
    });

    res.status(200).json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const sendMessage = async (req, res) => {
  try {
    if (!req.params.friendId) {
      return res.status(400).json({ message: "Id not provided" });
    }
    const { friendId } = req.params;
    const { text} = req.body;
    const existsFriend = await User.findOne({ _id: friendId });
    if (!existsFriend) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!req.user.friends || !req.user.friends.includes(friendId)) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    if (!text && !req.file) {
      return res.status(400).json({ message: "Text or Image are required" });
    }

    let imageUrl;
    if (req.file) {
      imageUrl = req.file.path
    }

    const newMessage = new Message({
      messageSender: req.user._id,
      messageReceiver: friendId,
      text: text || "",
      image: imageUrl || null,
    });

    await newMessage.save();

    const friendSocketId = userSocketMap.get(friendId);
    if (friendSocketId) {
      io.to(friendSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
