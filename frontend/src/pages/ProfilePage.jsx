import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const ProfilePage = () => {
  return (
    <div className=" h-screen flex flex-col ">
      <Navbar />
      <div className=" flex flex-1 ">
        <Sidebar />
        <main className=" p-6 bg-gray-950  ml-64 mt-14 w-full flex justify-center">
          <div className="w-5/12 p-4 rounded-2xl bg-base-300 shadow-xl ">
            <h2 className=" text-3xl font-semibold text-white ">Profile</h2>
            <img
              src="../../public/Screenshot 2025-08-15 125854.png"
              alt="profilePic"
              className=" ml-auto mr-auto w-36 h-36 rounded-full border-4 "
            />
            <form className=" flex flex-col gap-4">
              <div>
                <label
                  htmlFor="name"
                  className=" block font-medium text-sm mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  // value=
                  className=" p-3 w-full rounded-lg focus:outline-none ring-2 ring-white  "
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className=" block font-medium text-sm mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  // value=
                  className=" p-3 w-full rounded-lg focus:outline-none ring-2 ring-white  "
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className=" block font-medium text-sm mb-2"
                >
                  Bio
                </label>
                <textarea
                  type="text"
                  name="email"
                  id="email"
                  // value=
                  rows="5"
                  className=" p-3 w-full rounded-lg focus:outline-none ring-2 ring-white  "
                />
              </div>

              <button type="submit" className=" btn btn-md bg-base-100 ">
                Update
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
