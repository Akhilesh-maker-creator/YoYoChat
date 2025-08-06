import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    messageSender: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    messageReceiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    text:{
        type: String,
        required: true
    },
    image:{
        type: String,
    }
},{ timestamps: true })

export const Message = mongoose.model("Message", MessageSchema)