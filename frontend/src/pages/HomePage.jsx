import useGetFriends from "../hooks/friendHooks/useGetFriends";
import useGetAllUsers from "../hooks/userHooks/useGetAllUsers";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import useOutgoingFriendReqs from "../hooks/friendHooks/useOutgoingFriendReqs";
import { useEffect, useState } from "react";
import FriendProfile from "../components/FriendProfile";
import UserProfile from "../components/UserProfile";

const HomePage = () => {
  const { friends } = useGetFriends();
  const { users } = useGetAllUsers();
  const { outgoingFriendReqs } = useOutgoingFriendReqs();

  const [outgoingFriendReqIds, setOutgoingFriendReqIds] = useState(new Set());

  useEffect(() => {
    const outgoingIds = new Set();
    if (outgoingFriendReqs && outgoingFriendReqs.length > 0) {
      outgoingFriendReqs.forEach((req) => {
        outgoingIds.add(req.requestReceiver._id);
      });
      setOutgoingFriendReqIds(outgoingIds);
    }
  }, [outgoingFriendReqs]);
  
  return (
    <>
      <div className=" h-screen flex flex-col ">
        <Navbar />
        <div className=" flex flex-1 ">
          <Sidebar />

          {/* People */}
          <main className=" p-6 bg-gray-950 flex flex-col  ml-64 mt-14 w-full overflow-y-auto ">
            {/* Friends */}
            <h2 className=" text-4xl font-semibold mb-8 ">Your Friends</h2>

            <div className=" grid grid-cols-3 gap-5 mb-8 ">
              {/* friend Card */}
              {friends.length == 0 ? (
                <h2> No Friends Yet</h2>
              ) : (
                friends.map((friend) => {
                  return <FriendProfile key={friend._id} friend={friend} />;
                })
              )}
            </div>

            {/* Other Users */}
            <h2 className=" text-4xl font-semibold mb-8 ">Meet New People</h2>

            {/* User Card */}
            <div className=" grid grid-cols-3 gap-5 mb-6 ">
              {users.map((user) => {
                return (
                  <UserProfile
                    key={user._id}
                    user={user}
                    outgoingFriendReqIds={outgoingFriendReqIds}
                  />
                );
              })}
            </div>
            <div></div>
          </main>
        </div>
      </div>
    </>
  );
};

export default HomePage;
