import React, { useState } from "react";
import useLogin from "../hooks/userHooks/useLogin";


const LoginPage = () => {
  const { loginMutation, isPending, error } = useLogin();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => { 
    e.PreventDefault()
    loginMutation(loginData)};
  return (
    
    
      <div className=" m-auto mt-28 bg-base-200 rounded-lg shadow-lg max-w-lg p-6  flex-1 ">
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col gap-4"
        >
          <h2 className=" text-3xl font-semibold text-white ">Login</h2>

          <div>
            <label htmlFor="email" className=" block font-medium text-sm mb-2">
              Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={loginData.email}
              onChange={(e)=>{setLoginData({...loginData,password: e.target.value })}}
              placeholder="jamesbond989@example.com"
              className=" p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600  "
              />
          </div>

          <div>
            <label htmlFor="password" className=" block font-medium text-sm mb-2 ">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={loginData.password}
              onChange={(e)=>{setLoginData({...loginData,password: e.target.value })}}
              placeholder="*********"
              className=" p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600  "
            />
          </div>

          <button type="submit" className=" btn btn-md bg-base-100 " disabled={isPending}>
            {isPending ? (
              <>
                <span className="loading loading-spinner loading-xs"></span>
                Logging in...
              </>
            ) : (
              "Log in"
            )}
          </button>
        </form>
      </div>
   
  
  );
};

export default LoginPage;
