import React from "react";
import { Bell, BellOff } from "lucide-react"; 

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import IncomingFriendReqProfile from "../components/IncomingFriendReqProfile";
import useIncomingFriendReqs from "../hooks/friendHooks/useIncomingFriendReqs";
import ThemeSynchronizer from "../hooks/themeHook/useThemeSynchronizer";

const FriendRequestPage = () => {
  const { incomingPendingFriendReqs, isFetching } = useIncomingFriendReqs();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      
      <div className="drawer-content flex flex-col h-screen bg-base-200">
        <ThemeSynchronizer />
        <Navbar />

        {/* Added pt-20 for Navbar clearance */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 mt-12">
          <div className="max-w-6xl mx-auto space-y-8">
            
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent/10 rounded-xl text-accent"><Bell className="size-6" /></div>
              <div>
                <h2 className="text-2xl font-bold text-base-content">Notifications</h2>
                <p className="text-sm text-base-content/60">Manage your friend requests</p>
              </div>
            </div>

            {isFetching ? <div className="skeleton h-32 w-full rounded-xl"></div> : incomingPendingFriendReqs.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center opacity-70">
                <div className="bg-base-100 p-6 rounded-full shadow-sm mb-4"><BellOff className="size-10 text-base-content/40" /></div>
                <h3 className="text-xl font-bold text-base-content">All caught up!</h3>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 animate-fade-in">
                {incomingPendingFriendReqs.map((request) => (
                  <div key={request._id} className="card bg-base-100 shadow-sm border border-base-300">
                    <IncomingFriendReqProfile user={request.requestSender} requestId={request._id} />
                  </div>
                ))}
              </div>
            )}
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

export default FriendRequestPage;