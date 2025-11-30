import React, { useState, useEffect } from "react";
import { Camera, Mail, User, FileText, Save } from "lucide-react"; 

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ThemeSynchronizer from "../hooks/themeHook/useThemeSynchronizer";
import useUpdateUser from "../hooks/userHooks/useUpdateUser";
import useAuth from "../hooks/userHooks/useAuth";

const ProfilePage = () => {
  const { updateUserMutation, isPending } = useUpdateUser();
  const { authUser } = useAuth();
  const [imagePreview, setImagePreview] = useState(null);
  const [updatedData, setUpdatedData] = useState({ name: "", bio: "", profilePic: "" });

  useEffect(() => {
    if (authUser) {
      setUpdatedData({
        name: authUser.name || "",
        bio: authUser.bio || "",
        profilePic: authUser.profilePic || "",
      });
      setImagePreview(authUser.profilePic)
    }
  }, [authUser]);

  const handleUserUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (updatedData.profilePic) formData.append("image", updatedData.profilePic);
    formData.append("name", updatedData.name || " ");
    formData.append("bio", updatedData.bio || " ");
    updateUserMutation(formData);
  };

  const handleImgUpload = (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith("image/")) return;
    setUpdatedData((prev) => ({ ...prev, profilePic: file }));
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => setImagePreview(reader.result);
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      
      <div className="drawer-content flex flex-col h-screen bg-base-200">
        <ThemeSynchronizer />
        <Navbar />

        {/* Added pt-20 for Navbar clearance */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 mt-10 flex justify-center">
          <div className="w-full max-w-2xl">
            <div className="card bg-base-100 shadow-xl border border-base-300">
              <div className="h-20 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-t-2xl"></div>
              <div className="card-body -mt-16 pt-0">
                
                <div className="flex justify-center mb-6">
                  <div className="relative group">
                    <div className="avatar">
                      <div className="w-32 h-32 rounded-full ring-4 ring-base-100 shadow-lg">
                        <img src={imagePreview || "https://avatar.iran.liara.run/public"} alt="Profile" className="object-cover"/>
                      </div>
                    </div>
                    <label htmlFor="imgUpload" className="absolute bottom-0 right-0 bg-primary text-primary-content p-2.5 rounded-full cursor-pointer shadow-lg hover:scale-110 transition-transform">
                      <Camera className="size-5" />
                      <input type="file" id="imgUpload" className="hidden" accept="image/*" onChange={handleImgUpload} />
                    </label>
                  </div>
                </div>

                <form onSubmit={handleUserUpdate} className="space-y-6">
                  <div className="form-control">
                    <label className="label"><span className="label-text font-medium flex items-center gap-2"><User className="size-4"/> Full Name</span></label>
                    <input type="text" className="input input-bordered w-full focus:input-primary" value={updatedData.name} onChange={(e) => setUpdatedData({...updatedData, name: e.target.value})} />
                  </div>
                  <div className="form-control">
                    <label className="label"><span className="label-text font-medium flex items-center gap-2"><Mail className="size-4"/> Email Address</span></label>
                    <input type="text" value={authUser?.email || ""} readOnly className="input input-bordered w-full bg-base-200/50 text-base-content/60 cursor-not-allowed" />
                  </div>
                  <div className="form-control">
                    <label className="label"><span className="label-text font-medium flex items-center gap-2"><FileText className="size-4"/> Bio</span></label>
                    <textarea className="textarea textarea-bordered h-32 focus:textarea-primary text-base" value={updatedData.bio} onChange={(e) => setUpdatedData({...updatedData, bio: e.target.value})} ></textarea>
                  </div>
                  <div className="card-actions justify-end mt-4">
                    <button type="submit" className="btn btn-primary w-full sm:w-auto min-w-[150px]" disabled={isPending}>
                      {isPending ? <span className="loading loading-spinner"></span> : <><Save className="size-4"/> Save Changes</>}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* SIDEBAR */}
      <div className="drawer-side z-40">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
        <aside className="w-72 h-full">
           <Sidebar />
        </aside>
      </div>
    </div>
  );
};

export default ProfilePage;