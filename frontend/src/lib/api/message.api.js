import { axiosInstance } from "../axios";


export const getMessages = async(userId)=>{
    const res = await axiosInstance.get(`/message/getMessages/${userId}`)
    return res.data
}
export const sendMessage = async(userId,messageData)=>{
    const res = await axiosInstance.post(`/message/sendMessage/${userId}`,messageData)
    return res.data
}