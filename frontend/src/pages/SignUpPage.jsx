import { useState } from "react";
import useSignUp from "../hooks/userHooks/useSignUp";
import { Link } from "react-router";

const SignUpPage = () => {
  const { signUpMutation, isPending, error } = useSignUp();

  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signUpMutation(signUpData);
  };
  return (
    <div className=" m-auto mt-28 bg-base-200 rounded-lg shadow-lg max-w-lg p-6  flex-1 ">
      <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
        <h2 className=" text-3xl font-semibold text-white ">SignUp</h2>

        <div>
          <label htmlFor="name" className=" block font-medium text-sm mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={signUpData.name}
            onChange={(e) => {
              setSignUpData({ ...signUpData, name: e.target.value });
            }}
            placeholder="James Bond"
            className=" p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600  "
          />
        </div>
        <div>
          <label htmlFor="email" className=" block font-medium text-sm mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={signUpData.email}
            onChange={(e) => {
              setSignUpData({ ...signUpData, email: e.target.value });
            }}
            placeholder="jamesbond989@example.com"
            className=" p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600  "
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className=" block font-medium text-sm mb-2 "
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            value={signUpData.password}
            onChange={(e) => {
              setSignUpData({ ...signUpData, password: e.target.value });
            }}
            placeholder="*********"
            className=" p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600  "
          />
        </div>

        <button
          type="submit"
          className=" btn btn-md bg-base-100 "
          disabled={isPending}
        >
          {isPending ? (
            <>
              <span className="loading loading-spinner loading-xs"></span>
              Loading...
            </>
          ) : (
            "Create Account"
          )}
        </button>
      </form>
      <p className="text-sm text-center">
        Already have an account?
        <Link to="/login" className="text-primary hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUpPage;
