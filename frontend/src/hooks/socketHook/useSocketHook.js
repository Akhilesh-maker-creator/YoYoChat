import { create } from "zustand";
import { persist } from "zustand/middleware";
import { io } from "socket.io-client";
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "/api";

const useSocketHook = create(

    (set, get) => ({
      // messages: [],
      onlineUsers: [],
      socket: null,
      selectedUser: null,

      setSelectedUser: (user) => {
        set({ selectedUser: user });
      },
      clearSelectedUser: () => set({ selectedUser: null }),

      // setMessages: (data) => {
      //   set({ messages: data });
      // },

      // updateMessages: (data) => {
      //   set((state) => ({
      //     messages: [...state.messages, data],
      //   }));
      // },

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
        if (socket?.connected) {
          socket.off("newMessage");
          socket.disconnect();
        }
        set({ socket: null, onlineUsers: [],selectedUser: null});
      },

    }),
  )


export default useSocketHook;
