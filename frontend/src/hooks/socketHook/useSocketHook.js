import { create } from "zustand";
import { io } from "socket.io-client";
const BASE_URL = "http://localhost:3000" 

const useSocketHook = create(

    (set, get) => ({
      onlineUsers: [],
      socket: null,
      selectedUser: null,

      setSelectedUser: (user) => {
        set({ selectedUser: user });
      },
      clearSelectedUser: () => set({ selectedUser: null }),

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
