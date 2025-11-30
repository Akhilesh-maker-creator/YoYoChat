import React, { useEffect, useRef, useState } from "react";
import { Image, Send, X, ArrowLeft, Loader2 } from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { useQueryClient } from "@tanstack/react-query";

import Navbar from "../components/Navbar";
import useSendMessage from "../hooks/messageHooks/useSendMessage";
import useGetMessages from "../hooks/messageHooks/useGetMessages";
import useSocketHook from "../hooks/socketHook/useSocketHook";
import useAuth from "../hooks/userHooks/useAuth";
import useGetUserById from "../hooks/userHooks/useGetUserById";
import { formatMessageTime } from "../lib/utils";
import ThemeSynchronizer from "../hooks/themeHook/useThemeSynchronizer";

const ChatPage = () => {
  const { friendId: id } = useParams();
  const navigate = useNavigate();
  const { authUser } = useAuth();
  const queryClient = useQueryClient();

  // Hooks
  const {
    selectedUser,
    setSelectedUser,
    socket,
    connectSocket,
    disconnectSocket
  } = useSocketHook();

  const { messagesData: messages, error: getMessagesError, isLoading: isMessagesLoading } = useGetMessages(id);
  const { userData, error: getUserError } = useGetUserById(id);
  const { sendMessageMutation, isPending: isSending } = useSendMessage(id);

  // Refs & State
  const fileInputRef = useRef();
  const messageEndRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [messageData, setMessageData] = useState({ text: "", image: null });

  // --- EFFECTS ---

  // 1. Validate ID
  useEffect(() => {
    if (!id || id === "undefined") navigate("/");
  }, [id, navigate]);

  // 2. Set Selected User
  useEffect(() => {
    if (userData) setSelectedUser(userData);
  }, [userData, setSelectedUser]);

  // 3. Socket Connection
  useEffect(() => {
    if (authUser?._id) connectSocket(authUser._id);
    return () => disconnectSocket();
  }, [authUser?._id, connectSocket, disconnectSocket]);

  // 4. Listen for Messages
  useEffect(() => {
    if (!selectedUser || !socket) return;
    
    const handleNewMessage = (newMessage) => {
      if (newMessage.messageSender === selectedUser._id) {
        queryClient.setQueryData(["messages", id], (oldData) => [...(oldData || []), newMessage]);
      }
    };

    socket.on("newMessage", handleNewMessage);
    return () => socket.off("newMessage", handleNewMessage);
  }, [selectedUser, socket, queryClient, id]);

  // 5. Auto-scroll to bottom
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, imagePreview]);

  // --- HANDLERS ---

  const handleClose = () => {
    setSelectedUser(null);
    disconnectSocket();
    navigate("/");
  };

  const handleImgUpload = (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith("image/")) return;

    setMessageData({ ...messageData, image: file });
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    setMessageData({ ...messageData, image: null });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!messageData.text.trim() && !messageData.image) return;

    const formData = new FormData();
    if (messageData.image) formData.append("image", messageData.image);
    formData.append("text", messageData.text.trim() || " ");

    sendMessageMutation({ friendId: id, messageData: formData });
    
    // Reset Form
    setMessageData({ text: "", image: null });
    setImagePreview(null);
  };

  // --- RENDER HELPERS ---

  if (getMessagesError || getUserError) {
    return (
      <div className="h-screen flex items-center justify-center bg-base-200">
        <div className="alert alert-error max-w-md">
          <span>Error: {getMessagesError?.message || getUserError?.message}</span>
          <button className="btn btn-sm" onClick={() => navigate("/")}>Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-base-200">
      <ThemeSynchronizer />
      <Navbar />

      {/* Main Chat Container */}
      <div className="flex-1 flex flex-col overflow-hidden w-full max-w-5xl mx-auto md:p-4 mt-16">
        
        {/* CHAT WINDOW CARD */}
        <div className="flex-1 flex flex-col bg-base-100 md:rounded-2xl shadow-xl overflow-hidden border border-base-300">
          
          {/* 1. CHAT HEADER */}
          <header className="flex items-center gap-3 bg-base-100/80 backdrop-blur-md p-3 border-b border-base-300 sticky top-0 z-10">
            <button onClick={handleClose} className="btn btn-ghost btn-circle btn-sm md:hidden">
              <ArrowLeft size={20} />
            </button>
            
            <div className="avatar">
              <div className="w-10 h-10 rounded-full ring ring-base-300 ring-offset-base-100 ring-offset-2">
                <img
                  src={selectedUser?.profilePic || "https://avatar.iran.liara.run/public"}
                  alt="profile"
                />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-base-content truncate">{selectedUser?.name || "Loading..."}</h3>
              {/* <p className="text-xs text-base-content/50">Online</p> */}
            </div>

            <button onClick={handleClose} className="btn btn-ghost btn-circle btn-sm hidden md:flex">
              <X size={20} />
            </button>
          </header>

          {/* 2. MESSAGES AREA */}
          <main className="flex-1 overflow-y-auto p-4 space-y-4 bg-base-200/50">
            {isMessagesLoading ? (
               <div className="flex justify-center py-10"><Loader2 className="animate-spin text-primary" /></div>
            ) : messages?.length === 0 ? (
               <div className="flex flex-col items-center justify-center h-full text-base-content/40">
                  <p>No messages yet. Say hi! 👋</p>
               </div>
            ) : (
               messages.map((message) => {
                 const isMyMessage = message.messageSender === authUser._id;
                 return (
                  <div key={message._id} className={`chat ${isMyMessage ? "chat-end" : "chat-start"}`}>
                    <div className="chat-image avatar">
                      <div className="w-8 h-8 rounded-full border border-base-300">
                        <img
                          src={isMyMessage ? (authUser?.profilePic || "https://avatar.iran.liara.run/public") : (selectedUser?.profilePic || "https://avatar.iran.liara.run/public")}
                          alt="avatar"
                        />
                      </div>
                    </div>
                    
                    <div className="chat-header text-xs opacity-50 mb-1 ml-1">
                      {formatMessageTime(message.createdAt)}
                    </div>
                    
                    <div className={`chat-bubble ${isMyMessage ? "chat-bubble-primary text-primary-content" : "bg-base-100 text-base-content border border-base-300"}`}>
                      {message.image && (
                        <img
                          src={message.image}
                          alt="Attachment"
                          className="max-w-[200px] rounded-lg mb-2 border border-black/10"
                        />
                      )}
                      {message.text && <p className="whitespace-pre-wrap">{message.text}</p>}
                    </div>
                  </div>
                 );
               })
            )}
            <div ref={messageEndRef} />
          </main>

          {/* 3. INPUT AREA */}
          <div className="bg-base-100 p-3 border-t border-base-300">
            
            {/* Image Preview Pop-up */}
            {imagePreview && (
              <div className="flex items-center gap-2 mb-2 p-2 bg-base-200 rounded-lg w-fit animate-in fade-in slide-in-from-bottom-2">
                <img src={imagePreview} alt="Preview" className="w-16 h-16 object-cover rounded-md" />
                <button onClick={removeImage} className="btn btn-circle btn-xs btn-ghost hover:bg-base-300">
                  <X size={16} />
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex items-end gap-2">
              <div className="flex-1 relative">
                 <input
                  type="text"
                  value={messageData.text}
                  onChange={(e) => setMessageData({ ...messageData, text: e.target.value })}
                  className="input input-bordered w-full focus:outline-none focus:border-primary pr-12 rounded-full"
                  placeholder="Type a message..."
                />
                
                {/* Image Upload Button (Inside Input) */}
                <button
                  type="button"
                  className={`absolute right-2 top-1/2 -translate-y-1/2 btn btn-circle btn-ghost btn-sm ${imagePreview ? "text-primary" : "text-base-content/40"}`}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Image size={20} />
                </button>
                <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleImgUpload} />
              </div>

              <button
                type="submit"
                disabled={isSending || (!messageData.text.trim() && !messageData.image)}
                className="btn btn-circle btn-primary"
              >
                {isSending ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ChatPage;