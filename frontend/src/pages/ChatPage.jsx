import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import { Image, Send, X } from "lucide-react";

const ChatPage = () => {
  const fileInputRef = useRef();
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 justify-center p-10 bg-gray-950">
        <div className="flex flex-col bg-base-300 mt-12  w-2/3 rounded-xl ">
          <header className="flex bg-base-200 p-2 rounded-t-xl ">
            <img
              src="../../public/Screenshot 2025-08-15 125854.png"
              alt="profile"
              className=" w-12 h-12 rounded-full"
            />
            <div>
              <p className="pt-1 ml-2">Akhilesh Rawat</p>
            </div>
            <button className=" ml-auto mr-5 mt-2 btn btn-sm btn-circle">
              <X size={20}/>
            </button>
          </header>

          <main className="flex-1 p-2 overflow-y-auto"></main>

          <div className="flex bg-base-200 p-2 rounded-b-xl">
            <input
              type="text"
              name="text"
              id="text"
              className=" rounded-lg h-10 w-4/5 ml-10 mb-2 input input-bordered "
              placeholder="Message"
            />

            <input
              type="file"
              accept="image/*"
              name="img-upload"
              id="img-upload"
              className=" hidden "
              ref={fileInputRef}
            />
            <button className=" btn  btn-circle ml-3 ">
              <Image size={25}/>
            </button>
            <button type="submit" className="btn  btn-circle ml-3 ">
              <Send size = {25}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
