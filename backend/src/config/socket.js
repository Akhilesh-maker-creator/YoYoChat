import express from "express"
import { Server } from 'socket.io';
import { createServer } from 'node:http';


const app = express()
const server = createServer(app)
const io = new Server(server,{
    cors:{
        origin: "http://localhost:5173",
        credentials: true
    }
})


const userSocketMap = new Map ()

io.on('connection', (socket)=> {
    console.log("a user connected")
    const userId = socket.handshake.query.userId
    if(userId){
        socket.userId = userId
        userSocketMap.set(userId, socket.id)
        io.emit("getOnlineUsers", Array.from(userSocketMap.keys()))
    }

    socket.on('disconnect', ()=> {
        console.log("user disconnected")
        if(socket.userId){
            userSocketMap.delete(socket.userId)
            socket.userId = null
            io.emit("getOnlineUsers", Array.from(userSocketMap.keys()))
        }

    })
})

export {app, server, io, userSocketMap}