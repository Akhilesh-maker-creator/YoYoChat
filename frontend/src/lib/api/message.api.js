import { axiosInstance } from "../axios";



export const getMessages = async(friendId)=>{
    const res = await axiosInstance.get(`/message/getMessages/${friendId}`)
    return res.data
}
export const sendMessage = async({friendId,messageData})=>{
    const res = await axiosInstance.post(`/message/sendMessage/${friendId}`,messageData)
    return res.data
}