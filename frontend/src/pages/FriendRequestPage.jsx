import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const FriendRequestPage = () => {
  return (
    <div className=" h-screen flex flex-col ">
      <Navbar />
      <div className=" flex flex-1 ">
        <Sidebar />
        <main className=" space-x-2 space-y-4 p-6 bg-gray-950  ml-64 mt-14 w-full overflow-y-auto">
          <h2 className=" text-4xl font-semibold mb-10  ">Notifications</h2>
          <h3 className=" text-2xl font-semibold mb-5 ">Friend Requests</h3>
          <div className=" flex  bg-base-300 rounded-lg shadow-md p-3">
            <img
              src="../../public/Screenshot 2025-08-15 125854.png"
              alt="profile"
              className=" w-14 h-14  rounded-full mr-3"
            />
            <div className=" flex flex-col mb-3 ">
              <p className=" text-lg ">Akhilesh Rawat</p>
              <p className=" text-xs ">Online</p>
            </div>
            <span className=" text-xl ml-auto mr-8 mt-1 p-1">
              email:akhi@gmail.com
            </span>
            <button className=" btn rounded-3xl p-3 pr-7 pl-7 mr-5 text-black bg-green-400 hover:bg-green-600  ">
              Accept
            </button>
          </div>
          
          <div className=" flex  bg-base-300 rounded-lg shadow-md p-3">
            <img
              src="../../public/Screenshot 2025-08-15 125854.png"
              alt="profile"
              className=" w-14 h-14  rounded-full mr-3"
            />
            <div className=" flex flex-col mb-3 ">
              <p className=" text-lg ">Akhilesh Rawat</p>
              <p className=" text-xs ">Online</p>
            </div>
            <span className=" text-xl ml-auto mr-8 mt-1 p-1">
              email:akhi@gmail.com
            </span>
            <button className=" btn rounded-3xl p-3 pr-7 pl-7 mr-5 text-black bg-green-400 hover:bg-green-600  ">
              Accept
            </button>
          </div>
          <div className=" flex  bg-base-300 rounded-lg shadow-md p-3">
            <img
              src="../../public/Screenshot 2025-08-15 125854.png"
              alt="profile"
              className=" w-14 h-14  rounded-full mr-3"
            />
            <div className=" flex flex-col mb-3 ">
              <p className=" text-lg ">Akhilesh Rawat</p>
              <p className=" text-xs ">Online</p>
            </div>
            <span className=" text-xl ml-auto mr-8 mt-1 p-1">
              email:akhi@gmail.com
            </span>
            <button className=" btn rounded-3xl p-3 pr-7 pl-7 mr-5 text-black bg-green-400 hover:bg-green-600  ">
              Accept
            </button>
          </div>
          <div className=" flex  bg-base-300 rounded-lg shadow-md p-3">
            <img
              src="../../public/Screenshot 2025-08-15 125854.png"
              alt="profile"
              className=" w-14 h-14  rounded-full mr-3"
            />
            <div className=" flex flex-col mb-3 ">
              <p className=" text-lg ">Akhilesh Rawat</p>
              <p className=" text-xs ">Online</p>
            </div>
            <span className=" text-xl ml-auto mr-8 mt-1 p-1">
              email:akhi@gmail.com
            </span>
            <button className=" btn rounded-3xl p-3 pr-7 pl-7 mr-5 text-black bg-green-400 hover:bg-green-600  ">
              Accept
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FriendRequestPage;
