import { create } from "zustand";
import { persist } from "zustand/middleware";
import { io } from "socket.io-client";
const BASE_URL = "http://localhost:3000";

// const useSocketHook = create((set,get)=>({
//     messages:[],
//     onlineUsers: [],
//     socket: null,
//     selectedUser: null,
//     setSelectedUser: (user)=>{
//         set({ selectedUser: user })
//      },
//      setMessages: (data)=>{
//         set({messages: data})
//      },
//      updateMessages: (data)=>{
//         set({messages: [...get().messages, data]})
//      },
//     connectSocket:(userId)=>{
//         const { socket } = get()
//         if (!userId || socket?.connected) return
//         const newSocket = io(BASE_URL,{
//             query:{
//                 userId
//             }
//         })
//         newSocket.connect()
//         set({ socket: newSocket})
//         newSocket.on("getOnlineUsers",(userIds)=>{
//             set({ onlineUsers: userIds })
//         })

//     },
//     disconnectSocket: ()=>{
//         const { socket } = get()
//         if (socket?.connected) socket.disconnect()
//         set({ socket: null , onlineUsers: []})
//     },
//     subscribeToMessages: ()=>{
//         const {selectedUserId, socket} = get()
//         if(!selectedUserId) return

//         socket?.on("newMessage",(newMessage)=>{
//             const isMessageSentToUser = newMessage.messageSender === selectedUserId
//             if(!isMessageSentToUser) return

//             set({ messages: [...get().messages, newMessage] })
//         })

//     },
//     unsubscribeFromMessages: ()=>{
//         const { socket } = get()
//         socket?.off("newMessage")
//     }
// }))
const useSocketHook = create(
  persist(
    (set, get) => ({
      messages: [],
      onlineUsers: [],
      socket: null,
      selectedUser: null,

      setSelectedUser: (user) => {
        set({ selectedUser: user });
      },
      clearSelectedUser: () => set({ selectedUser: null, messages: [] }),

      setMessages: (data) => {
        set({ messages: data });
      },

      updateMessages: (data) => {
        set((state) => ({
          messages: [...state.messages, data],
        }));
      },

      connectSocket: (userId) => {
        const { socket } = get();
        if (!userId || socket?.connected) return;

        const newSocket = io(BASE_URL, {
          query: { userId },
        });

        newSocket.connect();
        set({ socket: newSocket });

        newSocket.on("getOnlineUsers", (userIds) => {
          set({ onlineUsers: userIds });
        });
      },

      disconnectSocket: () => {
        const { socket } = get();
        if (socket?.connected) socket.disconnect();
        set({ socket: null, onlineUsers: [], messages: [] });
      },

      subscribeToMessages: () => {
        const { selectedUser, socket } = get();
        if (!selectedUser?._id || !socket) return;

        socket?.on("newMessage", (newMessage) => {
          const isMessageSentToUser =
            newMessage.messageSender === selectedUser._id;
          if (!isMessageSentToUser) return;

          set((state) => ({
            messages: [...state.messages, newMessage],
          }));
        });
      },

      unsubscribeFromMessages: () => {
        const { socket } = get();
        socket?.off("newMessage");
      },
    }),
    {
      name: "chat-storage", // localStorage key
      partialize: (state) => ({
        selectedUser: state.selectedUser,
        messages: state.messages,
      }),
    }
  )
);

export default useSocketHook;
