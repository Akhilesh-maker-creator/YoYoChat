import { axiosInstance } from "../axios";



export const getMyFriends = async()=>{
    const res = await axiosInstance.get("/friend/getFriends")
    return res.data
}
export const sendFriendReq = async(userId)=>{
    const res = await axiosInstance.post(`/friend/sendFriendReq/${userId}`)
    return res.data
}
export const acceptFriendReq = async(friendRequestId)=>{
    const res = await axiosInstance.post(`/friend/acceptFriendReq/${friendRequestId}`)
    return res.data
}
export const getOutgoingFriendReqs = async()=>{
    const res = await axiosInstance.get("/friend/outgoingFriendReq")
    return res.data
}
export const getincomingFriendReqs = async()=>{
    const res = await axiosInstance.get("/friend/incomingFriendReq")
    return res.data
}