import mongoose from "mongoose";

const UserSchema =  new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    bio:{
        type: String,
        default:"Hey!! I am using YoYochat"
    },
    profilePic:{
        type: String,
        default: ""
    },
    friends:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]

},{timestamps: true})

export const User = mongoose.model("User", UserSchema)
