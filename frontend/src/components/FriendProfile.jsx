import React from "react";
import { useNavigate } from "react-router";
import { MessageCircle, Mail } from "lucide-react";
import useSocketHook from "../hooks/socketHook/useSocketHook.js";

const FriendProfile = ({ friend }) => {
  const { setSelectedUser } = useSocketHook();
  const navigate = useNavigate();

  const handleClick = () => {
    if (friend && friend._id) {
      setSelectedUser(friend);
      navigate(`/chat/${friend._id}`);
    }
  };

  return (
    <div className="card bg-base-100 shadow-sm border border-base-300 hover:shadow-md transition-shadow group">
      <div className="card-body p-5">
        
        {/* HEADER: Avatar + Name */}
        <div className="flex items-center gap-4 mb-3">
          <div className="avatar">
            <div className="w-14 h-14 rounded-full ring ring-base-200 ring-offset-base-100 ring-offset-2">
              <img src={friend.profilePic || "https://avatar.iran.liara.run/public"} alt={friend.name} />
            </div>
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-lg truncate" title={friend.name}>{friend.name}</h3>
            <div className="flex items-center gap-1 text-xs text-base-content/60">
              {/* <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Online */}
            </div>
          </div>
        </div>

        {/* INFO: Email & Bio */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-base-content/70 bg-base-200/50 p-2 rounded-lg">
            <Mail className="size-4 shrink-0" />
            <span className="truncate">{friend.email}</span>
          </div>
          {friend.bio && (
            <p className="text-sm text-base-content/60 line-clamp-2 h-10">
              {friend.bio}
            </p>
          )}
        </div>

        {/* ACTION: Message Button */}
        <div className="card-actions">
          <button 
            onClick={handleClick}
            className="btn btn-primary btn-sm w-full gap-2 rounded-full"
          >
            <MessageCircle className="size-4" /> Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendProfile;
