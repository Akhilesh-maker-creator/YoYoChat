// import React from "react";
// import { Link, useNavigate } from "react-router";
// import useAuth from "../hooks/userHooks/useAuth";
// import useLogout from "../hooks/userHooks/useLogout";
// import ThemeSelector from "./ThemeSelector";
// import ThemeSynchronizer from "../hooks/themeHook/useThemeSynchronizer";



// const Navbar = () => {
//   const navigate = useNavigate()
//   const { authUser } = useAuth()
//   const isAuthenticated = Boolean(authUser)

//   const { logoutMutation } = useLogout()

//   const logout = ()=>{
//     logoutMutation()
//   }

//   return (
//     <>
//     <ThemeSynchronizer />
//       <header className="flex h-14 items-center bg-black justify-between shadow-lg fixed top-0 left-0 right-0 z-10">
//         <h2 className=" p-14 text-2xl font-bold text-green-600 ">YoYoChat</h2>
//         <nav className="p-9 flex items-center justify-center gap-9">

//           { isAuthenticated &&
//             <Link className=" hidden sm:inline " to = "/profile">
//             Profile
//           </Link>
//           }

//           <ThemeSelector/>

//           {isAuthenticated &&
//             <button onClick={logout} className=" btn btn-sm sm:hidden inline ">
//               ham
//           </button>
//           }
//           {isAuthenticated &&
//             <button onClick={logout} className=" btn btn-sm hidden sm:inline ">
//             Logout
//           </button>
//           }
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Navbar;

// import React from "react";
// import { Link } from "react-router"; // Use react-router-dom for Links
// import { LogOut, User, MessageCircle, Menu } from "lucide-react"; // Modern Icons

// import useAuth from "../hooks/userHooks/useAuth";
// import useLogout from "../hooks/userHooks/useLogout";
// import ThemeSelector from "./ThemeSelector";
// import ThemeSynchronizer from "../hooks/themeHook/useThemeSynchronizer";

// const Navbar = () => {
//   const { authUser } = useAuth();
//   const isAuthenticated = Boolean(authUser);
//   const { logoutMutation } = useLogout();

//   return (
//     <>
//       <ThemeSynchronizer />
      
//       {/* GLASSMORPHISM NAVBAR
//         bg-base-100/80: Uses theme background with 80% opacity
//         backdrop-blur-md: Creates the frosted glass effect
//         sticky top-0: Keeps it at the top while scrolling
//       */}
//       <div className="navbar bg-base-100/80 backdrop-blur-md border-b border-base-300 fixed top-0 z-50 h-16 px-4">
        
//         {/* LEFT SIDE: Logo & Mobile Menu */}
//         <div className="navbar-start gap-3">
//           {/* Mobile Drawer Toggle (Only shows on mobile lg:hidden) */}
//           {isAuthenticated && (
//             <label 
//               htmlFor="my-drawer-2" 
//               className="btn btn-ghost btn-circle lg:hidden"
//             >
//               <Menu className="size-6 text-base-content" />
//             </label>
//           )}

//           {/* Brand Logo */}
//           <Link 
//             to="/" 
//             className="flex items-center gap-2 text-xl font-bold hover:opacity-80 transition-all"
//           >
//             <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
//               <MessageCircle className="size-5" />
//             </div>
//             <span className="hidden sm:inline bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
//               YoYoChat
//             </span>
//           </Link>
//         </div>

//         {/* RIGHT SIDE: Actions */}
//         <div className="navbar-end flex items-center gap-2">
          
//           <ThemeSelector />

//           {isAuthenticated && (
//             <>
//               {/* Profile Button (Tooltip included) */}
//               <div className="tooltip tooltip-bottom" data-tip="Profile">
//                 <Link to="/profile" className="btn btn-ghost btn-circle">
//                   <User className="size-5 text-base-content" />
//                 </Link>
//               </div>

//               {/* Logout Button */}
//               <div className="tooltip tooltip-bottom tooltip-error" data-tip="Logout">
//                 <button onClick={logoutMutation} className="btn btn-ghost btn-circle text-error/80 hover:bg-error/10">
//                   <LogOut className="size-5" />
//                 </button>
//               </div>

              
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

// 
// import React from "react";
// import { Link } from "react-router"; 
// import { LogOut, User, Bell, MessageCircle, Menu } from "lucide-react"; 

// import useAuth from "../hooks/userHooks/useAuth";
// import useLogout from "../hooks/userHooks/useLogout";
// import ThemeSelector from "./ThemeSelector";
// import ThemeSynchronizer from "../hooks/themeHook/useThemeSynchronizer";

// const Navbar = () => {
//   const { authUser } = useAuth();
//   const isAuthenticated = Boolean(authUser);
//   const { logoutMutation } = useLogout();

//   return (
//     <>
//       <ThemeSynchronizer />
      
//       {/* FIXED NAVBAR
//         - fixed top-0 w-full: Spans the entire width of the screen at the top.
//         - z-50: Ensures this sits ON TOP of the Sidebar (which will be z-40).
//         - glassmorphism: Keeps the see-through blur effect.
//       */}
//       <div className="navbar bg-base-100/80 backdrop-blur-md border-b border-base-300 fixed top-0 left-0 right-0 z-50 h-16 px-4">
        
//         {/* LEFT SIDE */}
//         <div className="navbar-start gap-3">
//           {/* Mobile Menu Toggle */}
//           {isAuthenticated && (
//             <label 
//               htmlFor="my-drawer-2" 
//               className="btn btn-ghost btn-circle lg:hidden"
//             >
//               <Menu className="size-6 text-base-content" />
//             </label>
//           )}

//           <Link to="/" className="flex items-center gap-2 text-xl font-bold hover:opacity-80 transition-all">
//             <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
//               <MessageCircle className="size-5" />
//             </div>
//             <span className="hidden sm:inline bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
//               YoYoChat
//             </span>
//           </Link>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="navbar-end flex items-center gap-2">
//           <ThemeSelector />

//           {isAuthenticated && (
//             <>
//               <div className="tooltip tooltip-bottom" data-tip="Notifications">
//                 <Link to="/friendreqs" className="btn btn-ghost btn-circle">
//                   <Bell className="size-5 text-base-content" />
//                 </Link>
//               </div>

//               <div className="tooltip tooltip-bottom" data-tip="Profile">
//                 <Link to="/profile" className="btn btn-ghost btn-circle">
//                   <User className="size-5 text-base-content" />
//                 </Link>
//               </div>

//               <div className="tooltip tooltip-bottom tooltip-error" data-tip="Logout">
//                 <button onClick={logoutMutation} className="btn btn-ghost btn-circle text-error/80 hover:bg-error/10">
//                   <LogOut className="size-5" />
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router"; 
import { LogOut, User, Bell, MessageCircle, Menu } from "lucide-react"; 

import useAuth from "../hooks/userHooks/useAuth";
import useLogout from "../hooks/userHooks/useLogout";
import ThemeSelector from "./ThemeSelector";
import ThemeSynchronizer from "../hooks/themeHook/useThemeSynchronizer";

const Navbar = () => {
  const { authUser } = useAuth();
  const isAuthenticated = Boolean(authUser);
  const { logoutMutation } = useLogout();

  return (
    <>
      <ThemeSynchronizer />
      
      {/* FIXED NAVBAR: z-50 ensures it stays on top of the sidebar */}
      <div className="navbar bg-base-100/80 backdrop-blur-md border-b border-base-300 fixed top-0 left-0 right-0 z-50 h-16 px-4">
        
        {/* LEFT SIDE */}
        <div className="navbar-start gap-3">
          {/* Mobile Menu Toggle */}
          {isAuthenticated && (
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