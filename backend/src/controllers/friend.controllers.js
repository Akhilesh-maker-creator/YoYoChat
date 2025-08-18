import { User } from "../models/User.model.js";
import { FriendRequest } from "../models/FriendRequest.model.js";

export const getFriends = async (req, res) => {
  try {
    if (!req.user || !req.user._id) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const user = await User.findById(req.user._id)
      .select("friends")
      .populate("friends", "name bio email profilePic _id");
    res.status(200).json(user?.friends || []);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const sendFriendRequest = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({ message: "Id not provided" });
    }
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    if (senderId.toString() === receiverId) {
      return res
        .status(400)
        .json({ message: "Cannot send friend request to yourself" });
    }
    const receiver = await User.findById(receiverId);
    if (!receiver) {
      return res.status(400).json({ message: " Receiver not found" });
    }

    if (receiver.friends.includes(req.user.friends)) {
      return res
        .status(400)
        .json({ message: "You are already friends with this person" });
    }

    const checkFriendRequest = await FriendRequest.findOne({
      $or: [
        { requestSender: senderId, requestReceiver: receiverId },
        { requestSender: receiverId, requestReceiver: senderId },
      ],
    });

    if (checkFriendRequest) {
      return res.status(400).json({ message: "Friendrequest already exists" });
    }
    const newFriendRequest = await FriendRequest.create({
      requestSender: senderId,
      requestReceiver: receiverId,
    });

    res.status(201).json({ newFriendRequest, message: "Friend request sent" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error in getting Friends" });
  }
};
export const acceptFriendRequest = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({ message: "Id not provided" });
    }
    const { id: friendRequestId } = req.params;

    const friendRequest = await FriendRequest.findById(friendRequestId);
    if (!friendRequest) {
      return res.status(400).json({ message: "Friend request doesn't exists" });
    }

    if (friendRequest.requestReceiver.toString() !== req.user._id.toString()) {
      return res.status(400).json({ message: "Unauthorized" });
    }
    const sender = await User.findById(friendRequest.requestSender);
    if (!sender) {
      return res.status(400).json({ message: "Sender not found" });
    }

    friendRequest.status = "accepted";
    await friendRequest.save();

    await User.findByIdAndUpdate(friendRequest.requestSender, {
      $addToSet: { friends: friendRequest.requestReceiver },
    });
    await User.findByIdAndUpdate(friendRequest.requestReceiver, {
      $addToSet: { friends: friendRequest.requestSender },
    });

    res.status(201).json({ message: "Friend request accepted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error in getting Friends" });
  }
};
export const outgoingFriendReq = async (req, res) => {
  try {
    const outgoingFriendRequests = await FriendRequest.find({
      requestSender: req.user._id,
      status: "pending",
    }).populate("requestReceiver", " _id name email profilePic");

    res.status(200).json(outgoingFriendRequests);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error in getting Friends" });
  }
};
export const incomingFriendReq = async (req, res) => {
  try {
    const incomingPendingFriendReqs = await FriendRequest.find({
      requestReceiver: req.user._id,
      status: "pending",
    }).populate("requestSender", "name email profilePic _id");
    const incomingAcceptedFriendReqs = await FriendRequest.find({
      requestReceiver: req.user._id,
      status: "accepted",
    }).populate("requestSender", "name email profilePic _id");

    res
      .status(200)
      .json({ incomingPendingFriendReqs, incomingAcceptedFriendReqs });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error in getting Friends" });
  }
};
