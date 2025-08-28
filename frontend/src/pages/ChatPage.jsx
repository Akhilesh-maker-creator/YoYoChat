import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { Image, Send, X } from "lucide-react";
import useSendMessage from "../hooks/messageHooks/useSendMessage";
import useGetMessages from "../hooks/messageHooks/useGetMessages";
import { useNavigate, useParams } from "react-router";
import useSocketHook from "../hooks/socketHook/useSocketHook";
import useAuth from "../hooks/userHooks/useAuth";
import { formatMessageTime } from "../lib/utils";


const ChatPage = () => {
  const navigate = useNavigate();
  const { authUser } = useAuth();

  const {
    messages,
    setMessages,
    selectedUser,
    setSelectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useSocketHook();

  useEffect(() => {
    if (!selectedUser) {
      navigate("/");
    }
  }, [selectedUser, navigate]);

  const { sendMessageMutation } = useSendMessage();

  const { messagesData } = useGetMessages(selectedUser._id);
  
  
  const fileInputRef = useRef();
  const messageEndRef = useRef(null);

  const [messageData, setMessageData] = useState({
    text: "",
    image: null,
  });

  useEffect(() => {
    if (messagesData) {
      setMessages(messagesData);
    }
  }, [setMessages]);

  useEffect(() => {
    if (!selectedUser) return;
    subscribeToMessages();

    return () => {
      unsubscribeFromMessages();
    };
  }, [selectedUser, subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleClose = () => {
    setSelectedUser(null);
    navigate("/");
  };

  const handleImgUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setMessageData({ ...messageData, image: base64Image });
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessageMutation({ friendId: selectedUser?._id, messageData });
    setMessageData({
      text: "",
      image: null,
    });
  };


  if (!selectedUser) {
    return (
      <div className="h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-1 justify-center items-center bg-gray-950">
          <p className="text-gray-400">Select a friend to start chatting</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 justify-center p-10 bg-gray-950">
        <div className="flex flex-col bg-base-300 mt-12  w-2/3 rounded-xl ">
          <header className="flex bg-base-200 p-2 rounded-t-xl ">
            <img
              src={
                selectedUser?.profilePic ||
                "../../public/Screenshot 2025-08-15 125854.png"
              }
              alt="profile"
              className=" w-12 h-12 rounded-full"
            />
            <div>
              <p className="pt-1 ml-2">{selectedUser?.name}</p>
            </div>
            <button
              className=" ml-auto mr-5 mt-2 btn btn-sm btn-circle"
              onClick={handleClose}
            >
              <X size={20} />
            </button>
          </header>

          <main className="flex-1 p-2 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message._id}
                className={`chat ${
                  message.messageSender === authUser._id
                    ? "chat-end"
                    : "chat-start"
                }`}
                ref={messageEndRef}
              >
                <div className=" chat-image avatar">
                  <div className="size-10 rounded-full border">
                    <img
                      src={
                        message.messageSender === authUser._id
                          ? authUser?.profilePic ||
                            "../../public/Screenshot 2025-08-15 125854.png"
                          : selectedUser?.profilePic ||
                            "../../public/Screenshot 2025-08-15 125854.png"
                      }
                      alt="profile pic"
                    />
                  </div>
                </div>
                <div className="chat-header mb-1">
                  <time className="text-xs opacity-50 ml-1">
                    {formatMessageTime(message.createdAt)}
                  </time>
                </div>
                <div className="chat-bubble flex flex-col">
                  {message.image && (
                    <img
                      src={message.image}
                      alt="Attachment"
                      className="sm:max-w-[200px] rounded-md mb-2"
                    />
                  )}
                  {message.text && <p>{message.text}</p>}
                </div>
              </div>
            ))}
          </main>

          <div className="flex bg-base-200 p-2 rounded-b-xl">
            <input
              type="text"
              name="text"
              id="text"
              value={messageData.text}
              onChange={(e) =>
                setMessageData({ ...messageData, text: e.target.value })
              }
              className=" rounded-lg h-10 w-4/5 ml-10 mb-2 input input-bordered "
              placeholder="Message"
            />

            <input
              type="file"
              accept="image/*"
              name="img-upload"
              id="img-upload"
              className=" hidden "
              onChange={handleImgUpload}
              ref={fileInputRef}
            />
            <button
              className=" btn  btn-circle ml-3 "
              onClick={() => fileInputRef.current?.click()}
            >
              <Image size={25} />
            </button>
            <button
              type="submit"
              className="btn  btn-circle ml-3 "
              onClick={handleSubmit}
            >
              <Send size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
