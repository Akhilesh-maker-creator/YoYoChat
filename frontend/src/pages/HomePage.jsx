import React, { useEffect, useState } from "react";
import { Users, UserPlus, Smile } from "lucide-react"; 

import useGetFriends from "../hooks/friendHooks/useGetFriends";
import useGetAllUsers from "../hooks/userHooks/useGetAllUsers";
import useOutgoingFriendReqs from "../hooks/friendHooks/useOutgoingFriendReqs";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import FriendProfile from "../components/FriendProfile";
import UserProfile from "../components/UserProfile";

const HomePage = () => {
  const { friends, isFetching: isFetchingFriends } = useGetFriends();
  const { users, isFetching: isFetchingUsers } = useGetAllUsers();
  const { outgoingFriendReqs } = useOutgoingFriendReqs();
  const [outgoingFriendReqIds, setOutgoingFriendReqIds] = useState(new Set());

  useEffect(() => {
    const outgoingIds = new Set();
    if (outgoingFriendReqs?.length > 0) {
      outgoingFriendReqs.forEach((req) => outgoingIds.add(req.requestReceiver._id));
    }
    setOutgoingFriendReqIds(outgoingIds);
  }, [outgoingFriendReqs]);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      
      <div className="drawer-content flex flex-col bg-base-200 min-h-screen">
        {/* Navbar is fixed, so it sits outside flow, but we render it here */}
        <Navbar />

        {/* Main Content: Added pt-16 to clear the fixed Navbar */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 mt-12">
          <div className="max-w-7xl mx-auto space-y-12 ">
            
            {/* Friends Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl text-primary"><Smile className="size-6"/></div>
                <div><h2 className="text-2xl font-bold text-base-content">Your Friends</h2></div>
              </div>

              {isFetchingFriends ? <GridSkeleton count={4} /> : friends.length === 0 ? <EmptyState /> : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
                  {friends.map((friend) => <FriendProfile key={friend._id} friend={friend} />)}
                </div>
              )}
            </section>

            <div className="divider opacity-50"></div>

            {/* Users Section */}
            <section className="pb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary"><UserPlus className="size-6"/></div>
                <div><h2 className="text-2xl font-bold text-base-content">Meet New People</h2></div>
              </div>
              {isFetchingUsers ? <GridSkeleton count={8} /> : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
                  {users.map((user) => (
                    <UserProfile key={user._id} user={user} outgoingFriendReqIds={outgoingFriendReqIds} />
                  ))}
                </div>
              )}
            </section>
          </div>
        </main>
      </div> 

      {/* SIDEBAR CONTAINER - STRICT WIDTH w-72 */}
      <div className="drawer-side z-40">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
        <aside className="w-72 h-full">
           <Sidebar />
        </aside>
      </div>
    </div>
  );
};

// --- Helper Components ---
const EmptyState = () => (
  <div className="alert bg-base-100 shadow-sm border border-base-300 py-8 flex flex-col items-center text-center gap-4">
    <div className="bg-base-200 p-4 rounded-full"><Users className="size-8 text-base-content/40"/></div>
    <div><h3 className="font-bold text-lg">No friends yet!</h3></div>
  </div>
);

const GridSkeleton = ({ count }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {Array(count).fill(0).map((_, i) => (
      <div key={i} className="flex flex-col gap-4 w-full">
        <div className="skeleton h-48 w-full rounded-2xl"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    ))}
  </div>
);

export default HomePage;