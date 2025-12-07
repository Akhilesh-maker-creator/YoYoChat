import React from "react";
import { Link, useLocation } from "react-router"; // Use react-router-dom
import { Home, Bell, User, Settings, LogOut } from "lucide-react"; // Consistent Icons
import useAuth from "../hooks/userHooks/useAuth";
import useLogout from "../hooks/userHooks/useLogout";

const Sidebar = () => {
  const { authUser } = useAuth();
  const { logoutMutation } = useLogout();
  const location = useLocation();


  const SIDEBAR_ITEMS = [
    { name: "Home", path: "/", icon: Home },
    { name: "Notifications", path: "/friendreqs", icon: Bell },
    { name: "Profile", path: "/profile", icon: User },

  ];

  return (
    <aside className="h-full flex flex-col bg-base-100 text-base-content pt-16 transition-all duration-300">
      
      {/* 1. NAVIGATION LINKS */}
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

      
      <div className="p-4 border-t border-base-300 bg-base-100/50 backdrop-blur-sm">
        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-base-200 transition-colors cursor-pointer group">
          
          
          <div className={`avatar ${authUser ? "online" : "offline"}`}>
            <div className="w-10 rounded-full ring ring-base-300 ring-offset-base-100 ring-offset-2">
              <img 
                src={authUser?.profilePic || "https://avatar.iran.liara.run/public"} 
                alt={authUser?.name} 
              />
            </div>
          </div>

          
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold truncate group-hover:text-primary transition-colors">
              {authUser?.name || "Guest User"}
            </p>
            <p className="text-xs text-base-content/50 truncate">
              {authUser ? "Online" : "Offline"}
            </p>
          </div>

          
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