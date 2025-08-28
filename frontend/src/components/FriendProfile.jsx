import React, { useEffect } from 'react'
import useSocketHook from '../hooks/socketHook/useSocketHook.js'
import { useNavigate } from 'react-router'


const FriendProfile = ({ friend }) => {
  const {selectedUser,setSelectedUser} = useSocketHook()
  const navigate = useNavigate()

  useEffect(() => {
  if (selectedUser?._id) {
    navigate(`/chat/${selectedUser._id}`);
  }
}, [selectedUser]);

 
  return (
            <div className=" card rounded-lg bg-base-300 shadow-lg p-4">
              <div className=" flex mb-3 ">
                <img
              src={friend.profilePic}
              alt="profile"
              className=" w-14 h-14  rounded-full mr-3"
            />
                <div className=" text-xl ">
                  <p className=" text-lg "> {friend.name} </p>
                  {/* <p className=" text-xs ">Online</p> */}
                </div>
              </div>

              <div className=" flex mb-3">
                <span className=" text-xs border p-1 rounded-full ">
                  email:{friend.email}
                </span>
              </div>

              <p className="p-3">Bio: {friend.bio.slice(0,25)}</p>

              <button className=" border-white rounded-3xl p-2 text-center btn  " onClick={()=> setSelectedUser(friend)}>
                Message
              </button>
            </div>
  )
}

export default FriendProfile
