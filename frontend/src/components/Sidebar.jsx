import React from 'react'
import { Link } from 'react-router'
import useAuth from '../hooks/userHooks/useAuth'


const Sidebar = () => {
  const { authUser } = useAuth()
  
  return (
      <section className=" w-64 bg-black p-2 mt-14 flex flex-col justify-start gap-4 fixed top-0 left-0 bottom-0 z-40 ">
          <Link
            className="   text-xl p-3  rounded-3xl shadow-lg hover:shadow-2xl hover:bg-base-300 transition "
            to="/"
          >
            Home
          </Link>
          <Link
            className="   text-xl p-3 rounded-3xl shadow-lg hover:shadow-2xl hover:bg-base-300 transition "
            to="/friendreqs"
          >
            Notifications
          </Link>
          <Link
            className="  text-xl p-3 rounded-3xl shadow-lg hover:shadow-2xl hover:bg-base-300 transition "
            to="/friends"
          >
            Friends
          </Link>
          
          <div className=" mt-auto flex justify-start">
            <img
          src={authUser?.profilePic}
          alt={authUser?.name}
          className=" w-14 h-14  rounded-full mr-3"
        />
            <div className=" text-xl ">
              <p className=" text-lg ">{authUser?.name}</p>
              {authUser?(<p className=" text-xs text-green-500 ">Online</p>):(<p className=" text-xs ">Offline</p>) }
              
            </div>
          </div>
        </section>
    
  )
}

export default Sidebar
