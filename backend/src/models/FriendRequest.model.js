import mongoose from "mongoose";

const FriendRequestSchema = new mongoose.Schema({

    requestSender:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    requestReceiver:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status:{
        type: String,
        enum:["pending","accepted"],
        default: "pending"

    }
},{timestamps: true})

export const FriendRequest = mongoose.model("FriendRequest", FriendRequestSchema)