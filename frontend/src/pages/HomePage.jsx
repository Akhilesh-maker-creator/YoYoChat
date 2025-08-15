import { Link } from "react-router";
import useGetFriends from "../hooks/friendHooks/useGetFriends";
import useGetAllUsers from "../hooks/userHooks/useGetAllUsers";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const { getFriends } = useGetFriends();
  const { getAllUsers } = useGetAllUsers();
  return (
    <>
      <div className=" h-screen flex flex-col ">
        <Navbar/>
        <div className=" flex flex-1 ">
        <Sidebar/>

        {/* People */}
        <main className=" p-6 bg-gray-950 flex flex-col  ml-64 mt-14 w-full overflow-y-auto ">
          {/* Friends */}
          <h2 className=" text-4xl font-semibold mb-10 ">Your Friends</h2>

          <div className=" grid grid-cols-3 gap-5 mb-10 ">
            {/* friend Card */}
            <div className=" card rounded-lg bg-base-300 shadow-lg p-4">
              <div className=" flex mb-3 ">
                <div className="bg-white rounded-full w-12 h-12 mr-3"></div>
                <div className=" text-xl ">
                  <p className=" text-lg ">Akhilesh Rawat</p>
                  <p className=" text-xs ">Online</p>
                </div>
              </div>

              <div className=" flex mb-3">
                <span className=" text-xs border p-1 rounded-full ">
                  email:akhi@gmail.com
                </span>
              </div>

              <p className="p-3">Bio: Hlo I am Namer</p>

              <div className=" border-white rounded-3xl p-2 text-center btn  ">
                Message
              </div>
            </div>
            {/* friend Card */}
            <div className=" card rounded-lg bg-base-300 shadow-lg p-4">
              <div className=" flex mb-3 ">
                <div className="bg-white rounded-full w-12 h-12 mr-3"></div>
                <div className=" text-xl ">
                  <p className=" text-lg ">Akhilesh Rawat</p>
                  <p className=" text-xs ">Online</p>
                </div>
              </div>

              <div className=" flex mb-3">
                <span className=" text-xs border p-1 rounded-full ">
                  email:akhi@gmail.com
                </span>
              </div>

              <p className="p-3">Bio: Hlo I am Namer</p>

              <div className=" border-white rounded-3xl p-2 text-center btn  ">
                Message
              </div>
            </div>
            {/* friend Card */}
            <div className=" card rounded-lg bg-base-300 shadow-lg p-4">
              <div className=" flex mb-3 ">
                <div className="bg-white rounded-full w-12 h-12 mr-3"></div>
                <div className=" text-xl ">
                  <p className=" text-lg ">Akhilesh Rawat</p>
                  <p className=" text-xs ">Online</p>
                </div>
              </div>

              <div className=" flex mb-3">
                <span className=" text-xs border p-1 rounded-full ">
                  email:akhi@gmail.com
                </span>
              </div>

              <p className="p-3">Bio: Hlo I am Namer</p>

              <div className=" border-white rounded-3xl p-2 text-center btn  ">
                Message
              </div>
            </div>
            {/* friend Card */}
            
            <div className=" card rounded-lg bg-base-300 shadow-lg p-4">
              <div className=" flex mb-3 ">
                <div className="bg-white rounded-full w-12 h-12 mr-3"></div>
                <div className=" text-xl ">
                  <p className=" text-lg ">Akhilesh Rawat</p>
                  <p className=" text-xs ">Online</p>
                </div>
              </div>

              <div className=" flex mb-3">
                <span className=" text-xs border p-1 rounded-full ">
                  email:akhi@gmail.com
                </span>
              </div>

              <p className="p-3">Bio: Hlo I am Namer</p>

              <div className=" border-white rounded-3xl p-2 text-center btn  ">
                Message
              </div>
            </div>
          </div>

          {/* Other Users */}
          <h2 className=" text-4xl font-semibold mb-10 ">Meet New People</h2>

          {/* User Card */}
          <div className=" grid grid-cols-3 gap-5 mb-10 ">
            <div className=" card rounded-lg bg-base-300 shadow-lg p-4">
              <div className=" flex mb-3 ">
                <div className="bg-white rounded-full w-12 h-12 mr-3"></div>
                <div className=" text-xl ">
                  <p className=" text-lg ">Akhilesh Rawat</p>
                  <p className=" text-xs ">Online</p>
                </div>
              </div>

              <div className=" flex mb-3">
                <span className=" text-xs border p-1 rounded-full ">
                  email:akhi@gmail.com
                </span>
              </div>

              <p className="p-3">Bio: Hlo I am Namer</p>

              <div className=" bg-green-500 rounded-3xl p-2 text-center text-black btn hover:bg-green-800 ">
                Send Friend Request
              </div>
            </div>
            <div className=" card rounded-lg bg-base-300 shadow-lg p-4">
              <div className=" flex mb-3 ">
                <div className="bg-white rounded-full w-12 h-12 mr-3"></div>
                <div className=" text-xl ">
                  <p className=" text-lg ">Akhilesh Rawat</p>
                  <p className=" text-xs ">Online</p>
                </div>
              </div>

              <div className=" flex mb-3">
                <span className=" text-xs border p-1 rounded-full ">
                  email:akhi@gmail.com
                </span>
              </div>

              <p className="p-3">Bio: Hlo I am Namer</p>

              <div className=" bg-green-500 rounded-3xl p-2 text-center text-black btn hover:bg-green-800 ">
                Send Friend Request
              </div>
            </div>
            <div className=" card rounded-lg bg-base-300 shadow-lg p-4">
              <div className=" flex mb-3 ">
                <div className="bg-white rounded-full w-12 h-12 mr-3"></div>
                <div className=" text-xl ">
                  <p className=" text-lg ">Akhilesh Rawat</p>
                  <p className=" text-xs ">Online</p>
                </div>
              </div>

              <div className=" flex mb-3">
                <span className=" text-xs border p-1 rounded-full ">
                  email:akhi@gmail.com
                </span>
              </div>

              <p className="p-3">Bio: Hlo I am Namer</p>

              <div className=" bg-green-500 rounded-3xl p-2 text-center text-black btn hover:bg-green-800 ">
                Send Friend Request
              </div>
            </div>
            <div className=" card rounded-lg bg-base-300 shadow-lg p-4">
              <div className=" flex mb-3 ">
                <div className="bg-white rounded-full w-12 h-12 mr-3"></div>
                <div className=" text-xl ">
                  <p className=" text-lg ">Akhilesh Rawat</p>
                  <p className=" text-xs ">Online</p>
                </div>
              </div>

              <div className=" flex mb-3">
                <span className=" text-xs border p-1 rounded-full ">
                  email:akhi@gmail.com
                </span>
              </div>

              <p className="p-3">Bio: Hlo I am Namer</p>

              <div className=" bg-green-500 rounded-3xl p-2 text-center text-black btn hover:bg-green-800 ">
                Send Friend Request
              </div>
            </div>
            <div className=" card rounded-lg bg-base-300 shadow-lg p-4">
              <div className=" flex mb-3 ">
                <div className="bg-white rounded-full w-12 h-12 mr-3"></div>
                <div className=" text-xl ">
                  <p className=" text-lg ">Akhilesh Rawat</p>
                  <p className=" text-xs ">Online</p>
                </div>
              </div>

              <div className=" flex mb-3">
                <span className=" text-xs border p-1 rounded-full ">
                  email:akhi@gmail.com
                </span>
              </div>

              <p className="p-3">Bio: Hlo I am Namer</p>

              <div className=" bg-green-500 rounded-3xl p-2 text-center text-black btn hover:bg-green-800 ">
                Send Friend Request
              </div>
            </div>
          </div>
          <div></div>
        </main>
        </div>
      </div>
    </>
  );
};

export default HomePage;
