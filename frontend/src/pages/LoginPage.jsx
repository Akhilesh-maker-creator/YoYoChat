import React, { useState } from "react";
import useLogin from "../hooks/userHooks/useLogin";
import { Link } from "react-router";


const LoginPage = () => {
  const { loginMutation, isPending, error } = useLogin();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => { 
    e.preventDefault()
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
            
              value={loginData.email}
              onChange={(e)=>{setLoginData({...loginData,email: e.target.value })}}
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
        <p className="text-sm text-center">
            Do not have an account?
            <Link to= "/signup"className="text-primary hover:underline" > Signup </Link>
        </p>
      </div>
   
  
  );
};

export default LoginPage;
