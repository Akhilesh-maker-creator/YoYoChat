import React from "react";
import { Link } from "react-router";
import useAuth from "../hooks/userHooks/useAuth";



const Navbar = () => {
  const { authUser } = useAuth()
  const isAuthenticated = Boolean(authUser)

  return (
    <>
      <header className="flex h-14 items-center bg-black justify-between shadow-lg fixed top-0 left-0 right-0 z-10">
        <h2 className=" p-14 text-2xl font-bold text-green-600 ">YoYoChat</h2>
        <nav className="p-9 flex items-center justify-center gap-9">

          { isAuthenticated &&
            <Link className=" hidden sm:inline " to = "/profile">
            Profile
          </Link>
          }

          <button className="btn btn-sm ">Themes</button>

          {isAuthenticated &&
            <button className=" btn btn-sm hidden sm:inline ">
            Logout
          </button>
          }
        </nav>
      </header>
    </>
  );
};

export default Navbar;
