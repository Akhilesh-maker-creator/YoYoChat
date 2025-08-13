import { Link } from "react-router";
import useGetFriends from "../hooks/friendHooks/useGetFriends";
import useGetAllUsers from "../hooks/userHooks/useGetAllUsers";

const HomePage = () => {
  const { getFriends } = useGetFriends();
  const { getAllUsers } = useGetAllUsers();
  return (
    <>
      <main className=" h-[calc(100vh-56px)] grid grid-cols-5 ">
        {/* SideBar */}
        <section className=" bg-black p-2 pt-8 flex flex-col justify-start gap-4 ">
          <Link
            className="   text-xl p-3  rounded-3xl shadow-lg hover:shadow-2xl hover:bg-base-300 transition "
            to="/"
          >
            Home
          </Link>
          <Link
            className="   text-xl p-3 rounded-3xl shadow-lg hover:shadow-2xl hover:bg-base-300 transition "
            to="/friends"
          >
            Notifications
          </Link>
          <Link
            className="  text-xl p-3 rounded-3xl shadow-lg hover:shadow-2xl hover:bg-base-300 transition "
            to="/friends"
          >
            Friends
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


        {/* People */}
        <section className="col-span-4 p-6 bg-gray-950 flex flex-col ">
          {/* Friends */}
          <h2 className=" text-4xl font-semibold mb-10 ">Your Friends</h2>

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

              <div className=" border-white rounded-3xl p-2 text-center btn  ">
                Message
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

              <div className=" border-white rounded-3xl p-2 text-center btn  ">
                Message
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

              <div className=" border-white rounded-3xl p-2 text-center btn  ">
                Message
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

              <div className=" border-white rounded-3xl p-2 text-center btn  ">
                Message
              </div>
            </div>
          </div>

          {/* Other Users */}
          <h2 className=" text-4xl font-semibold mb-10 ">Meet New People</h2>

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
          </div>
          <div></div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
