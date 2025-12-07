import React, { useState } from "react";
import { Link } from "react-router"; 
import useLogin from "../hooks/userHooks/useLogin";
import { Mail, Lock, Eye, EyeOff, LogIn, AlertCircle } from "lucide-react";

const LoginPage = () => {
  const { loginMutation, isPending, error } = useLogin();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation(loginData);
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          {/* HEADER */}
          <div className="text-center mb-6">
            <div className="mx-auto bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 text-primary">
              <LogIn className="size-8" />
            </div>
            <h2 className="text-3xl font-bold text-base-content">Welcome Back</h2>
            <p className="text-base-content/60 mt-2">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* EMAIL INPUT */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <label className="input input-bordered flex items-center gap-3 focus-within:input-primary transition-colors">
                <Mail className="size-5 text-base-content/50" />
                <input
                  type="email"
                  className="grow"
                  placeholder="you@example.com"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                  required
                />
              </label>
            </div>

            {/* PASSWORD INPUT */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <label className="input input-bordered flex items-center gap-3 focus-within:input-primary transition-colors">
                <Lock className="size-5 text-base-content/50" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="grow"
                  placeholder="••••••••"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="hover:text-base-content transition-colors text-base-content/50"
                >
                  {showPassword ? (
                    <EyeOff className="size-5" />
                  ) : (
                    <Eye className="size-5" />
                  )}
                </button>
              </label>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-primary">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* ERROR ALERT */}
            {error && (
              <div role="alert" className="alert alert-error text-sm py-2">
                <AlertCircle className="size-4" />
                <span>{error.message || "Invalid credentials"}</span>
              </div>
            )}

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="btn btn-primary w-full text-lg"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Logging in...
                </>
              ) : (
                "Log in"
              )}
            </button>
          </form>

          {/* FOOTER */}
          <div className="text-center mt-6">
            <p className="text-sm text-base-content/70">
              Don't have an account?{" "}
              <Link to="/signup" className="link link-primary font-semibold no-underline hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
