import { create } from "zustand";
import { io } from "socket.io-client";
const BASE_URL = "http://localhost:3000"

const useSocketHook = create((set,get)=>({
    onlineUsers: [],
    socket: null,
    connectSocket:(userId)=>{
        if (!userId || get().socket?.connected) return
        const newSocket = io(BASE_URL,{
            user:{
                userId: userId
            }
        })
        newSocket.connect()
        set({ socket: newSocket})
        socket.on("getOnlineUsers",(userIds)=>{
            set({ onlineUsers: userIds })
        })

    },
    disconnectSocket: ()=>{
        if (get().socket?.connected) socket.disconnect()
        set({ socket: null , onlineUsers: []})
    }
}))


// to make newMessage on and off listen events