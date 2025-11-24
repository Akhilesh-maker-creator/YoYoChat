// import { useNavigate } from "react-router";
// import useAcceptFriendReq from "../hooks/friendHooks/useAcceptFriendReq";


// const IncomingFriendReqProfile = ({ user,requestId }) => {
//   const navigate = useNavigate()

//   const { acceptFriendReqMutation } = useAcceptFriendReq();

//   const acceptFriendRequest = ()=>{
//     acceptFriendReqMutation(requestId)
//     navigate("/friendreqs")
//   }
//   return (
//     <div className=" flex  bg-base-300 rounded-lg shadow-md p-3">
//       <img
//         src={user.profilePic}
//         alt="profile"
//         className=" w-14 h-14  rounded-full mr-3"
//       />
//       <div className=" flex flex-col mb-3 ">
//         <p className=" text-lg ">{user.name}</p>
//         <p className=" text-xs ">Online</p>
//       </div>
//       <span className=" text-xl ml-auto mr-8 mt-1 p-1">email:{user.email}</span>
//       <button className=" btn rounded-3xl p-3 pr-7 pl-7 mr-5 text-black bg-green-400 hover:bg-green-600 "
//        onClick={acceptFriendRequest}>
//         Accept
//       </button>
//     </div>
//   );
// };

// export default IncomingFriendReqProfile;


import React from "react";
import { useNavigate } from "react-router";
import { Check, X, User } from "lucide-react";
import useAcceptFriendReq from "../hooks/friendHooks/useAcceptFriendReq";

const IncomingFriendReqProfile = ({ user, requestId }) => {
  const navigate = useNavigate();
  const { acceptFriendReqMutation, isPending } = useAcceptFriendReq();

  const handleAccept = () => {
    acceptFriendReqMutation(requestId);
    // Optional: Only navigate if you really want to leave the page immediately
    // navigate("/friendreqs"); 
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4">
      
      {/* USER INFO SECTION */}
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <div className="avatar">
          <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
            <img src={user.profilePic || "https://avatar.iran.liara.run/public"} alt={user.name} />
          </div>
        </div>
        
        <div className="min-w-0">
          <h4 className="font-bold text-base truncate">{user.name}</h4>
          <div className="flex items-center gap-2 text-sm text-base-content/60">
             <User className="size-3" />
             <span className="truncate">{user.email}</span>
          </div>
        </div>
      </div>

      {/* ACTIONS SECTION */}
      <div className="flex items-center gap-2 w-full sm:w-auto mt-2 sm:mt-0">
        <button 
          className="btn btn-primary btn-sm flex-1 sm:flex-none gap-2 rounded-full"
          onClick={handleAccept}
          disabled={isPending}
        >
          <Check className="size-4" /> Confirm
        </button>
        
        {/* Optional: Add a 'Delete' or 'Ignore' button here if your API supports it */}
        <button className="btn btn-ghost btn-sm btn-circle text-base-content/50">
           <X className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default IncomingFriendReqProfile;