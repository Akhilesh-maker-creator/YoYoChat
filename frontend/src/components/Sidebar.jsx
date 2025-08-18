import React from 'react'
import { Link } from 'react-router'


const Sidebar = () => {
  
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
            <div className="bg-base-300 rounded-full w-12 h-12 mr-3"></div>
            <div className=" text-xl ">
              <p className=" text-lg ">Akhilesh Rawat</p>
              <p className=" text-xs ">Online</p>
            </div>
          </div>
        </section>
    
  )
}

export default Sidebar
