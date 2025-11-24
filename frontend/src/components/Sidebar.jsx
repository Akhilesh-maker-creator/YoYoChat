// import React from 'react'
// import { Link } from 'react-router'
// import useAuth from '../hooks/userHooks/useAuth'


// const Sidebar = () => {
//   const { authUser } = useAuth()
  
//   return (
//       <section className=" w-64 bg-black p-2 mt-14 sm:flex flex-col justify-start gap-4 fixed top-0 left-0 bottom-0 z-40 hidden ">
//           <Link
//             className="   text-xl p-3  rounded-3xl shadow-lg hover:shadow-2xl hover:bg-base-300 transition "
//             to="/"
//           >
//             Home
//           </Link>
//           <Link
//             className="   text-xl p-3 rounded-3xl shadow-lg hover:shadow-2xl hover:bg-base-300 transition "
//             to="/friendreqs"
//           >
//             Notifications
//           </Link>
          
//           <div className=" mt-auto flex justify-start">
//             <img
//           src={authUser?.profilePic}
//           alt={authUser?.name}
//           className=" w-14 h-14  rounded-full mr-3"
//         />
//             <div className=" text-xl ">
//               <p className=" text-lg ">{authUser?.name}</p>
//               {authUser?(<p className=" text-xs text-green-500 ">Online</p>):(<p className=" text-xs ">Offline</p>) }
              
//             </div>
//           </div>
//         </section>
    
//   )
// }

// export default Sidebar

import React from "react";
import { Link, useLocation } from "react-router"; // Use react-router-dom
import { Home, Bell, User, Settings, LogOut } from "lucide-react"; // Consistent Icons
import useAuth from "../hooks/userHooks/useAuth";
import useLogout from "../hooks/userHooks/useLogout";

const Sidebar = () => {
  const { authUser } = useAuth();
  const { logoutMutation } = useLogout();
  const location = useLocation();

  // Configuration for Sidebar Links
  const SIDEBAR_ITEMS = [
    { name: "Home", path: "/", icon: Home },
    { name: "Notifications", path: "/friendreqs", icon: Bell },
    { name: "Profile", path: "/profile", icon: User },
    // You can add Settings here later
    // { name: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <aside className="h-full flex flex-col bg-base-100 text-base-content pt-16 transition-all duration-300">
      
      {/* 1. NAVIGATION LINKS (Scrollable Area) */}
      <nav className="flex-1 overflow-y-auto py-4 px-2">
        <ul className="menu menu-lg gap-2">
          
          {SIDEBAR_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`
                    flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200
                    ${isActive 
                      ? "bg-primary text-primary-content shadow-md font-semibold" 
                      : "hover:bg-base-200 text-base-content/80"
                    }
                  `}
                >
                  <item.icon className={`size-6 ${isActive ? "text-primary-content" : "text-base-content/70"}`} />
                  <span className="text-base tracking-wide">{item.name}</span>
                </Link>
              </li>
            );
          })}

        </ul>
      </nav>

      {/* 2. USER FOOTER (Pinned to bottom) */}
      <div className="p-4 border-t border-base-300 bg-base-100/50 backdrop-blur-sm">
        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-base-200 transition-colors cursor-pointer group">
          
          {/* Avatar with Online Status */}
          <div className={`avatar ${authUser ? "online" : "offline"}`}>
            <div className="w-10 rounded-full ring ring-base-300 ring-offset-base-100 ring-offset-2">
              <img 
                src={authUser?.profilePic || "https://avatar.iran.liara.run/public"} 
                alt={authUser?.name} 
              />
            </div>
          </div>

          {/* User Info */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold truncate group-hover:text-primary transition-colors">
              {authUser?.name || "Guest User"}
            </p>
            <p className="text-xs text-base-content/50 truncate">
              {authUser ? "Online" : "Offline"}
            </p>
          </div>

          {/* Mini Logout Button (Icon only) */}
          <button 
            onClick={logoutMutation}
            className="btn btn-ghost btn-xs btn-square opacity-0 group-hover:opacity-100 transition-opacity"
            title="Quick Logout"
          >
            <LogOut className="size-4 text-error" />
          </button>
        </div>
      </div>

    </aside>
  );
};

export default Sidebar;