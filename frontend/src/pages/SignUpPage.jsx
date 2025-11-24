import React, { useState } from "react";
import { Link } from "react-router"; // Standard import for web
import { User, Mail, Lock, Eye, EyeOff, UserPlus, AlertTriangle } from "lucide-react";
import useSignUp from "../hooks/userHooks/useSignUp";

const SignUpPage = () => {
  const { signUpMutation, isPending, error } = useSignUp();

  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    signUpMutation(signUpData);
  };

  return (
    // 1. FULL SCREEN CENTERED LAYOUT
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      
      {/* 2. CARD COMPONENT */}
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-300">
        <div className="card-body">
          
          {/* HEADER */}
          <div className="text-center mb-6">
            <div className="mx-auto bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 text-secondary">
              <UserPlus className="size-8" />
            </div>
            <h2 className="text-3xl font-bold text-base-content">Create Account</h2>
            <p className="text-base-content/60 mt-2">Join YoYoChat today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* NAME INPUT */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <label className="input input-bordered flex items-center gap-3 focus-within:input-secondary transition-colors">
                <User className="size-5 text-base-content/50" />
                <input
                  type="text"
                  className="grow"
                  placeholder="James Bond"
                  value={signUpData.name}
                  onChange={(e) =>
                    setSignUpData({ ...signUpData, name: e.target.value })
                  }
                  required
                />
              </label>
            </div>

            {/* EMAIL INPUT */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <label className="input input-bordered flex items-center gap-3 focus-within:input-secondary transition-colors">
                <Mail className="size-5 text-base-content/50" />
                <input
                  type="email"
                  className="grow"
                  placeholder="you@example.com"
                  value={signUpData.email}
                  onChange={(e) =>
                    setSignUpData({ ...signUpData, email: e.target.value })
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
              <label className="input input-bordered flex items-center gap-3 focus-within:input-secondary transition-colors">
                <Lock className="size-5 text-base-content/50" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="grow"
                  placeholder="••••••••"
                  value={signUpData.password}
                  onChange={(e) =>
                    setSignUpData({ ...signUpData, password: e.target.value })
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
            </div>

            {/* ERROR ALERT (Shows if hook returns an error) */}
            {error && (
              <div role="alert" className="alert alert-error text-sm py-2 rounded-lg">
                <AlertTriangle className="size-4" />
                <span>{error.message || "Registration failed. Try again."}</span>
              </div>
            )}

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="btn btn-secondary w-full text-lg mt-2"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Creating Account...
                </>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          {/* FOOTER */}
          <div className="text-center mt-6">
            <p className="text-sm text-base-content/70">
              Already have an account?{" "}
              <Link 
                to="/login" 
                className="link link-secondary font-semibold no-underline hover:underline"
              >
                Login
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUpPage;