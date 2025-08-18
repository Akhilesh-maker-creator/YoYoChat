import { useNavigate } from "react-router";
import useAcceptFriendReq from "../hooks/friendHooks/useAcceptFriendReq";


const IncomingFriendReqProfile = ({ user,requestId }) => {
  const navigate = useNavigate()

  const { acceptFriendReqMutation } = useAcceptFriendReq();

  const acceptFriendRequest = ()=>{
    acceptFriendReqMutation(requestId)
    navigate("/friendreqs")
  }
  return (
    <div className=" flex  bg-base-300 rounded-lg shadow-md p-3">
      <img
        src={user.profilePic}
        alt="profile"
        className=" w-14 h-14  rounded-full mr-3"
      />
      <div className=" flex flex-col mb-3 ">
        <p className=" text-lg ">{user.name}</p>
        <p className=" text-xs ">Online</p>
      </div>
      <span className=" text-xl ml-auto mr-8 mt-1 p-1">email:{user.email}</span>
      <button className=" btn rounded-3xl p-3 pr-7 pl-7 mr-5 text-black bg-green-400 hover:bg-green-600 "
       onClick={acceptFriendRequest}>
        Accept
      </button>
    </div>
  );
};

export default IncomingFriendReqProfile;
