import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const { signup } = useSignup();

  const handleSignup = async (e) => {
    e.preventDefault();

    // Simple validation check
    if (!fullname || !email || !phone || !password) {
      alert("Please fill in all fields.");
      return;
    }

    await signup(email, password, phone, fullname);
  };

  // Smooth scroll to top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="flex flex-col font-robotoMono items-center justify-center sm:min-h-screen -mt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden w-full">
        {/* Left Section */}
        <div className="flex flex-col justify-center mt-16 sm:mt-0 items-center bg-purple-300 p-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Sign Up for Zarrin
          </h1>
          <div className="mt-6 w-full max-w-xs">
            <button className="w-full flex items-center justify-center py-2 mb-4 bg-white hover:bg-black hover:text-white text-gray-800 font-medium shadow rounded-lg">
              <img
                src="https://img.icons8.com/color/48/google-logo.png"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Sign up with Google
            </button>
            <button className="w-full flex items-center justify-center py-2 bg-blue-600 text-white font-medium shadow rounded-lg">
              <img
                src="https://img.icons8.com/ios-filled/50/facebook-new.png"
                alt="Facebook"
                className="w-5 h-5 mr-2"
              />
              Sign up with Facebook
            </button>
            <p className="text-sm text-gray-700 mt-4">Or sign up with email</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center items-center bg-gray-50 p-6 md:p-10">
          <form className="w-full max-w-sm" onSubmit={handleSignup}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
                placeholder="Enter your full name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="text"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="before:ease relative h-12 w-full mt-3 bg-blue-500 overflow-hidden border border-black text-white shadow-2xl transition-all rounded-xl before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-[#8A3FFC]  before:duration-300  hover:shadow-[#8A3FFC] hover:before:h-64 hover:text-white hover:before:-translate-y-32"
            >
              <span className="relative z-10">Sign Up</span>
            </button>
            <NavLink
              to={"/login"}
              className="block mt-4 text-center text-sm text-gray-700 hover:underline hover:text-blue-500 transition"
            >
              Already have an account?{" "}
              <span className="font-robotoMono">Log in</span>
            </NavLink>
            <p className="text-xs text-gray-500 mt-4 text-center">
              By signing up, you agree to Totowala's{" "}
              <span className="text-blue-600 cursor-pointer hover:underline">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-blue-600 cursor-pointer hover:underline">
                Privacy Policy
              </span>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
