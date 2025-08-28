import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import useUpdateUser from "../hooks/userHooks/useUpdateUser";
import useAuth from "../hooks/userHooks/useAuth";
import { Camera } from "lucide-react";
import { useState } from "react";

const ProfilePage = () => {
  
  const { updateUserMutation, isPending } = useUpdateUser();
  const { authUser, isLoading } = useAuth();
  const [updatedData, setUpdatedData] = useState({
    name: authUser?.name,
    bio: authUser?.bio,
    profilePic: authUser?.profilePic,
  });

  const handleUserUpdate = (e)=>{
    e.preventDefault()
    updateUserMutation(updatedData)
  }

  const handleImgUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setUpdatedData({ ...updatedData, profilePic: base64Image });
    }
  }

  return (
    <div className=" h-screen flex flex-col ">
      <Navbar />
      <div className=" flex flex-1 ">
        <Sidebar />
        <main className=" p-6 bg-gray-950  ml-64 mt-14 w-full flex justify-center">
          <div className="w-5/12 p-4 rounded-2xl bg-base-300 shadow-xl ">
            <h2 className=" text-3xl font-semibold text-white ">Profile</h2>
            <img
              src={updatedData.profilePic || authUser?.profilePic}
              alt="profilePic"
              className=" ml-auto mr-auto w-36 h-36 rounded-full border-4 "
            />
            <form className=" flex flex-col gap-4">
              <div className="relative">
                <label htmlFor="imgUpload" className=" absolute bottom-0 right-40
                  bg-base-content hover:scale-105
                  p-2 rounded-full cursor-pointer 
                  transition-all duration-200">
                  <Camera className="w-5 h-5 text-base-200" />
                  <input type="file" className=" hidden" name="imgUpload" id="imgUpload" onChange={handleImgUpload} />
                </label>
              </div>
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
                  value={updatedData.name || authUser?.name}
                  onChange={(e)=>{setUpdatedData({...updatedData, name:e.target.value})}}
                  className=" p-3 w-full rounded-lg focus:outline-none ring-2 ring-white  "
                />
              </div>

              <div>
                <h3 className=" block font-medium text-sm mb-2">Email</h3>
                <p className=" p-3 w-full rounded-lg  ring-2 ring-white  ">
                  {authUser?.email}
                </p>
              </div>
              <div>
                <label
                  htmlFor="bio"
                  className=" block font-medium text-sm mb-2"
                >
                  Bio
                </label>
                <textarea
                  type="text"
                  name="bio"
                  value={updatedData.bio || authUser?.bio}
                  onChange={(e)=>{setUpdatedData({...updatedData, bio:e.target.value})}}
                  rows="5"
                  className=" p-3 w-full rounded-lg focus:outline-none ring-2 ring-white  "
                />
              </div>

              <button type="submit" className=" btn btn-md bg-base-100 " onClick={handleUserUpdate}>
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
