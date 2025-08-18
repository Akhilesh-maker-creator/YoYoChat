import useSendFriendReq from "../hooks/friendHooks/useSendFriendReq";

const UserProfile = ({ user, outgoingFriendReqIds }) => {
  const { sendFriendReqMutation } = useSendFriendReq();
  
  

  const sendFriendRequest = () => {
    sendFriendReqMutation(user._id);
  };
  return (
    <div className=" card rounded-lg bg-base-300 shadow-lg p-4">
      <div className=" flex mb-3 ">
        <img
          src={user.profilePic}
          alt="profile"
          className=" w-14 h-14  rounded-full mr-3"
        />
        <div className=" text-xl ">
          <p className=" text-lg ">{user.name}</p>
          {/* <p className=" text-xs ">Online</p> */}
        </div>
      </div>

      <div className=" flex mb-3">
        <span className=" text-xs border p-1 rounded-full ">
          email:{user.email}
        </span>
      </div>

      <p className="p-3">Bio: {user.bio}</p>

      <button
        className={` bg-green-500 rounded-3xl p-2 text-center text-black  hover:bg-green-800 ${
          outgoingFriendReqIds.has(user._id) ? "btn - disabled" : "btn"
        }`}
        disabled={outgoingFriendReqIds.has(user._id)}
        onClick={sendFriendRequest}
      >
        Send Friend Request
      </button>
    </div>
  );
};

export default UserProfile;
