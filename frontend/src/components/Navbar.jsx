import React from "react";
import { Link } from "react-router"; 
import { LogOut, User, Bell, MessageCircle, Menu } from "lucide-react"; 

import useAuth from "../hooks/userHooks/useAuth";
import useLogout from "../hooks/userHooks/useLogout";
import ThemeSelector from "./ThemeSelector";
import ThemeSynchronizer from "../hooks/themeHook/useThemeSynchronizer";

const Navbar = ({hideMenu = false}) => {
  const { authUser } = useAuth();
  const isAuthenticated = Boolean(authUser);
  const { logoutMutation } = useLogout();

  return (
    <>
      <ThemeSynchronizer />
      
      <div className="navbar bg-base-100/80 backdrop-blur-md border-b border-base-300 fixed top-0 left-0 right-0 z-50 h-16 px-4">
        
        {/* LEFT SIDE */}
        <div className="navbar-start gap-3">
          {/* Mobile Menu Toggle */}
          {isAuthenticated && !hideMenu && (
            <label 
              htmlFor="my-drawer-2" 
              className="btn btn-ghost btn-circle lg:hidden"
            >
              <Menu className="size-6 text-base-content" />
            </label>
            
          )}

          <Link to="/" className="flex items-center gap-2 text-xl font-bold hover:opacity-80 transition-all">
            <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <MessageCircle className="size-5" />
            </div>
            <span className="hidden sm:inline bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              YoYoChat
            </span>
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="navbar-end flex items-center gap-2">
          <ThemeSelector />

          {isAuthenticated && (
            <>
              <div className="tooltip tooltip-bottom" data-tip="Notifications">
                <Link to="/friendreqs" className="btn btn-ghost btn-circle">
                  <Bell className="size-5 text-base-content" />
                </Link>
              </div>

              <div className="tooltip tooltip-bottom" data-tip="Profile">
                <Link to="/profile" className="btn btn-ghost btn-circle">
                  <User className="size-5 text-base-content" />
                </Link>
              </div>

              <div className="tooltip tooltip-bottom tooltip-error" data-tip="Logout">
                <button onClick={logoutMutation} className="btn btn-ghost btn-circle text-error/80 hover:bg-error/10">
                  <LogOut className="size-5" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;