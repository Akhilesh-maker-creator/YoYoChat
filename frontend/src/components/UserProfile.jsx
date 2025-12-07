import React from "react";
import { UserPlus, Check, Mail } from "lucide-react";
import useSendFriendReq from "../hooks/friendHooks/useSendFriendReq";

const UserProfile = ({ user, outgoingFriendReqIds }) => {
  const { sendFriendReqMutation, isPending } = useSendFriendReq();
  
  const isReqSent = outgoingFriendReqIds.has(user._id);

  const sendFriendRequest = () => {
    if (!isReqSent) sendFriendReqMutation(user._id);
  };

  return (
    <div className="card bg-base-100 shadow-sm border border-base-300 hover:border-primary/50 transition-colors">
      <div className="card-body p-5">
        
        {/* HEADER */}
        <div className="flex items-center gap-3 mb-4">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full bg-base-200">
               <img src={user.profilePic || "https://avatar.iran.liara.run/public"} alt={user.name} />
            </div>
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-base truncate">{user.name}</h3>
            <p className="text-xs text-base-content/50 truncate">Suggested for you</p>
          </div>
        </div>

        {/* INFO */}
        <div className="text-sm text-base-content/70 bg-base-200/50 p-2 rounded-lg mb-4 flex items-center gap-2">
           <Mail className="size-3.5" />
           <span className="truncate">{user.email}</span>
        </div>

        {/* ACTION */}
        <button
          className={`btn btn-sm w-full gap-2 rounded-full transition-all duration-300 ${
            isReqSent 
              ? "btn-success btn-outline cursor-default opacity-80" 
              : "btn-outline hover:btn-primary"
          }`}
          onClick={sendFriendRequest}
          disabled={isReqSent || isPending}
        >
          {isReqSent ? (
            <>
              <Check className="size-4" /> Sent
            </>
          ) : (
            <>
              <UserPlus className="size-4" /> Connect
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default UserProfile;