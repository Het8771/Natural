import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import login from "../Image/login.svg";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col md:flex-row w-full max-w-5xl">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-2xl font-semibold text-[#04675C] mb-2">Login</h2>
          <p className="text-sm text-gray-600 mb-6">
            Do not have an account,{" "}
            <a href="#" className="underline font-medium">
              create a new one.
            </a>
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Enter Your Email Or Phone
              </label>
              <input
                type="text"
                placeholder="michael.joe@xmail.com"
                className="w-full px-4 py-3 border rounded-full text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#04675C]"
              />
            </div>

            <div className="relative">
              <label className="block text-sm text-gray-700 mb-1">
                Enter Your Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="******"
                className="w-full px-4 py-3 border rounded-full text-sm text-gray-700 pr-10 focus:outline-none focus:ring-2 focus:ring-[#04675C]"
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-500"
                onClick={togglePassword}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-[#04675C] text-white py-3 rounded-full font-semibold hover:bg-[#03564e] transition"
            >
              Login
            </button>
          </form>

          <div className="mt-4 text-center">
            <a
              href="#"
              className="text-sm text-[#04675C] underline hover:text-[#03463e]"
            >
              Forgot Your Password
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 sm:block hidden ">
          <img
            src={login}
            alt="Login"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
