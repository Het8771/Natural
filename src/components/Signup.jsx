import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import login from "../Image/login.svg";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row w-full max-w-5xl">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-2xl font-semibold text-[#04675C] mb-2">Signup</h2>
          <p className="text-sm text-gray-600 mb-6">
            Already Have An Account,{" "}
            <a href="#" className="underline font-medium">
              Login.
            </a>
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="px-4 py-3 border rounded-full text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#04675C]"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 border rounded-full text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#04675C]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-4 py-3 border rounded-full text-sm text-gray-700 pr-10 focus:outline-none focus:ring-2 focus:ring-[#04675C]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-500"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>

              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="w-full px-4 py-3 border rounded-full text-sm text-gray-700 pr-10 focus:outline-none focus:ring-2 focus:ring-[#04675C]"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-3.5 text-gray-500"
                >
                  {showConfirm ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                className="accent-[#04675C]"
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I have read and agreed to the{" "}
                <span className="underline">Terms of Service and Privacy Policy</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#04675C] text-white py-3 rounded-full font-semibold hover:bg-[#03564e] transition"
              disabled={!agreed}
            >
              Create Account
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 sm:block hidden">
          <img
            src={login}
            alt="Signup"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
